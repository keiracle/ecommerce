const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { Order, validateOrder } = require("../models/order");
const { OrderDetail, validateOrderDetail } = require("../models/orderDetail");
const { User } = require("../models/user");
const { Product } = require("../models/product");

router.get("/", async (req, res) => {
  const orders = await Order.find().sort("-issueDate");
  res.send(orders);
});

//Get order by user id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).send("The request with given ID not found");

  res.send(user.orders);
});

// Order product (create order)
// orderDetails: [
//   {
//     productId: "abc",
//     quantity: "1"
//   }
// ];
router.post("/", auth, (req, res) => {
  const { error } = validateOrder(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const orderDetailsErr = req.body.orderDetails.map(i =>
    validateOrderDetail(i)
  );
  orderDetailsErr.forEach(validateResult => {
    if (validateResult.error)
      return res.status(404).send(validateResult.error.details[0].message);
  });

  const getSingleOrderDetail = async requestOrder => {
    const product = await Product.findById(requestOrder.productId).and({
      isPublished: true
    });
    if (!product) return res.status(404).send("The given product ID not found");

    if (requestOrder.quantity > product.quantityInStock)
      return res.status(404).send("Invalid orders");

    const {
      price,
      salePrice,
      hotDealPrice,
      hotDealExpired,
      quantityInStock,
      quantityForDeal,
      quantityDealSold
    } = product;
    let finalPrice = price;

    // In hot deal time but invalid quantity
    if (
      quantityDealSold + requestOrder.quantity > quantityForDeal &&
      hotDealExpired.startDate <= Date.now() &&
      hotDealExpired.endDate > Date.now()
    )
      return res.status(404).send("Invalid orders");

    // Check if product on sale
    const isSale = salePrice > 0;
    if (isSale) finalPrice = salePrice;

    // Check if product on hot deal
    // Hot deal if true will override sale
    const isHotDeal =
      quantityDealSold + requestOrder.quantity <= quantityForDeal &&
      hotDealExpired.startDate <= Date.now() &&
      hotDealExpired.endDate > Date.now();
    if (isHotDeal) finalPrice = hotDealPrice;

    if (isHotDeal) product.quantityDealSold += requestOrder.quantity;
    product.quantityInStock -= requestOrder.quantity;
    await product.save();

    return new OrderDetail({
      product: new Product({
        _id: product._id,
        name: product.name,
        price: finalPrice
      }),
      quantity: requestOrder.quantity
    });
  };

  const getOrderDetails = () => {
    return Promise.all(req.body.orderDetails.map(i => getSingleOrderDetail(i)));
  };

  const saveOrder = async order => {
    order = await order.save();
    const user = await User.updateOne(
      { _id: mongoose.Types.ObjectId(req.user._id) },
      {
        $push: {
          orders: [order._id]
        }
      }
    );
  };

  getOrderDetails()
    .then(orderDetails => {
      return new Order({
        orderDetails
      });
    })
    .then(async order => {
      await saveOrder(order);
      res.send(order);
    });
});

//Not allow to modify order
router.put("/", (req, res) => {});

router.delete("/:id", async (req, res) => {
  const order = await Order.findByIdAndRemove(req.params.id);

  if (!order) return res.status(404).send("The order with given ID not found");

  res.send(order);
});

module.exports = router;
