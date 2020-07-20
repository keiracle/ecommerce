import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import * as authService from "./services/authService";
import styled from "styled-components";
import Introduction from "./components/Introduction";
import ProductContainer from "./components/product/ProductContainer";
import Cart from "./components/cart/Cart";
import BannerTop from "./components/bannerTop/BannerTop";
import DraggableList from "./components/DraggableList";
import NotFound from "./components/NotFound";
import FileUpload from "./components/FileUpload";
import RegisterForm from "./components/authorizationPage/RegisterForm";
import Detail from "./components/detail/Detail";
import AuthorizationPage from "./components/authorizationPage/AuthorizationPage";
import Footer from "./components/footer/Footer";
import Profile from "./components/profile/Profile";
import FetchingScreen from "./components/commons/FetchingScreen";
import AdminTemplate from "./components/adminTemplate/AdminTemplate";

function App(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    setUser(user);
  }, []);

  const Nested = useCallback(
    (props) => {
      const { children, component = "" } = props;
      const Component = component;
      return (
        <>
          <BannerTop user={user} />
          {children}
          {component && <Component />}
          <Footer />
        </>
      );
    },
    [user]
  );

  return (
    <SApp>
      <Switch>
        {true && <Route path="/admin" exact component={AdminTemplate} />}
        <Route
          path={`/landing`}
          exact
          component={() => <Nested component={Introduction} />}
        />
        <Route path="/Drag" exact component={DraggableList} />
        <Route
          path={`/products`}
          component={() => <Nested component={ProductContainer} />}
        />
        <Route path={`/cart`} component={() => <Nested component={Cart} />} />
        <Route
          path={`/product/:id`}
          component={() => <Nested component={Detail} />}
        />
        <Route
          path={`/login`}
          component={() => <AuthorizationPage state="login" />}
        />
        <Route
          path={`/register`}
          component={() => <AuthorizationPage state="register" />}
        />
        <Route
          path={`/profile`}
          component={() => <Nested component={Profile} />}
        />
        <Route
          path={`/not-found`}
          component={() => <Nested component={NotFound} />}
        />
        <Redirect from="/" exact to="/products" />
        <Redirect to={`/not-found`} />
      </Switch>
      <FetchingScreen />
    </SApp>
  );

  // return (
  //   <SApp>
  //     <BannerTop user={user} />
  //     <Switch>
  //       {true && <Route path="/admin" exact component={AdminTemplate} />}
  //       <Route path={`/landing`} exact component={Introduction} />
  //       <Route path="/Drag" exact component={DraggableList} />
  //       <Route path={`/products`} component={ProductContainer} />
  //       <Route path={`/cart`} component={Cart} />
  //       <Route path={`/product/:id`} component={Detail} />
  //       <Route
  //         path={`/login`}
  //         component={() => <AuthorizationPage state="login" />}
  //       />
  //       <Route
  //         path={`/register`}
  //         component={() => <AuthorizationPage state="register" />}
  //       />
  //       <Route path={`/profile`} component={Profile} />
  //       <Route path={`/not-found`} component={NotFound} />
  //       <Redirect to={`/not-found`} />
  //     </Switch>
  //     <Footer />
  //     <FetchingScreen />
  //   </SApp>
  // );
}

const SApp = styled.div`
  * > {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  background-color: ${({ theme }) => theme.color.background};
`;

export default App;
