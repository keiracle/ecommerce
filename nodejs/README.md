# Ecommerce-Node

- App API can be found at https://shielded-crag-28383.herokuapp.com/api/

:point_right: User:
  - Get /api/users/me
    - Request: need valid token.
    - Response: User
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
  
  - Post /api/users/me
    - Request: need valid token and body of edited information.
    - Response: User
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
      
  - Post(Register) /api/users/
    - Request: need body of information about register user.
    - Response: User
    - :heavy_check_mark: Response readable message if there is Error.

  - Post(Register) /api/users/
    - Request: need body of information about register user.
    - Response: User
    - :heavy_check_mark: Response readable message if there is Error.
    
:point_right: Auth:
  - Post(Login) /api/auth/
    - Request: need body of valid username & password.
    - Response: String(token)
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
    
:point_right: Brand:
  - Get /api/brands
    - Request: nothing.
    - Response: [Brand]
 
:point_right: Category:
  - Get /api/categories
    - Request: nothing.
    - Response: [Category]

:point_right: Role:
  - Get /api/roles
    - Request: nothing.
    - Response: [Role]
  - Post /api/roles/
    - Request: need body of valid role.
    - Response: Role
    - :heavy_check_mark: Response readable message if there is Error.
    
:point_right: WishList:
  - Get(Get your wishlist) /api/wishList/
    - Request: need valid token.
    - Response: WishList
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
  
  - Post(Add or remove item in wishlist) /api/wishList/:id
    - Request: need valid token and valid id in params.
    - Response: WishList
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
      
 :point_right: Cart:
  - Get(Get your cart) /api/cart/
    - Request: need valid token.
    - Response: Cart ( [Product] )
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
  
  - Put(Add item to cart) /api/cart/:id
    - Request: need valid token, valid id in params and valid body with pattern { product: ObjectId, quantity: Number }.
    - Response: Cart ( [Product] )
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
    - :heavy_check_mark: Check if product is out of stock.
    
  - Delete(Delete specific item from cart) /api/cart/:id
    - Request: need valid token, valid id in params.
    - Response: Cart ( [Product] )
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
      
  - Delete(Delete all item from cart) /api/cart/
    - Request: need valid token.
    - Response: Cart ( [Product] )
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
 
:point_right: Product:
  - Get /api/products/
    - Request: nothing.
    - Response: [ Product ]
    - :heavy_check_mark: Response readable message if there is Error.

  - Get(Get special product with given id) /api/products/:id
    - Request: Valid product id in params.
    - Response: [ Product ]
    - :heavy_check_mark: Response readable message if there is Error.
  
  - Post /api/products/
    - Request: need valid token, body with pattern { file: Image, data: { Product } }.
    - Response: Product
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
    
  - Put /api/products/:id
    - Request: need valid token, valid id as params, body with pattern { file: Image, data: { Product } }.
    - Response: Product
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
      
  - Delete /api/users/:id
    - Request: need valid id as params.
    - Response: RemovedProduct
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
    
  :point_right: Order:
  - Get /api/orders/
    - Request: need valid token.
    - Response: [Order]
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
  
  - Get /api/orders/:id
    - Request: need valid token & specific valid id as params.
    - Response: Order
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
  
  - Post /api/orders/
    - Request: need valid token, valid body of order.
    - Response: Order
    - :heavy_check_mark: Have authenticatin using token.
    - :heavy_check_mark: Response readable message if there is Error.
    - :heavy_check_mark: Prevent malicious person using JWT and check validate.
      
  - Delete /api/orders/:id
    - Request: need valid id as params.
    - Response: RemovedOrder
    - :heavy_check_mark: Response readable message if there is Error.
