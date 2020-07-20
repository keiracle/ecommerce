import React, { useCallback } from 'react';
import ProductContainer from './features/products/ProductContainer';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cart from './features/cart/Cart';
import Detail from './features/detail/Detail';
import AuthorizationPage from './features/user/AuthorizationPage';
import BannerTop from './features/banner/BannerTop';

function App() {
  const Nested = useCallback(props => {
    const { children, component = '' } = props;
    const Component = component;
    return (
      <>
        <BannerTop />
        {children}
        {component && <Component />}
        {/* <Footer /> */}
      </>
    );
  }, []);

  return (
    <SApp>
      <Switch>
        {/* {true && <Route path="/admin" exact component={AdminTemplate} />} */}
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
        {/* <Route
          path={`/profile`}
          component={() => <Nested component={Profile} />}
        /> */}
        {/* <Route
          path={`/not-found`}
          component={() => <Nested component={NotFound} />}
        /> */}
        <Redirect from="/" exact to="/products" />
        <Redirect to={`/not-found`} />
      </Switch>
    </SApp>
  );
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
