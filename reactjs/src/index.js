import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/productsProvider";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./context/cartProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "./index.css";
import { WishListProvider } from "./context/wishListProvider";
import { UserProvider } from "./context/userProvider";
import { StuffProvider } from "./context/stuffProvider";

library.add(fab, fas, far);

const theme = {
  color: {
    background: "#f4f4f4",
    primaryDark: "#0D0C1D",
    primaryLight: "#ffffff",
    primaryRed: "rgb(220,9,78)",
    primaryOrange: "rgb(255, 131, 0)",
  },

  responsive: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
};

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <CartProvider>
        <WishListProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <StuffProvider>
                <App />
              </StuffProvider>
            </ThemeProvider>
          </BrowserRouter>
        </WishListProvider>
      </CartProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
