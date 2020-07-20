import React from "react";
import { Layout } from "antd";
import Button from "../commons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import WishListContent from "./WishList";
import AdminTemplate from "../adminTemplate/AdminTemplate";

const { Header, Content } = Layout;

const ProfileMain = (props) => {
  const { user, setUser, collapsed, handleSiderCollapse } = props;

  let { path, url } = useRouteMatch();

  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Button
          onClick={handleSiderCollapse}
          variant="text"
          color="primary"
          size="large"
        >
          {collapsed ? (
            <FontAwesomeIcon icon="arrow-right" />
          ) : (
            <FontAwesomeIcon icon="arrow-left" />
          )}
        </Button>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 280,
        }}
      >
        <Switch>
          <Route path={`${path}/details`} exact>
            <ProfileDetails user={user} setUser={setUser} />
          </Route>
          <Route path={`${path}/wishlist`} exact>
            <WishListContent user={user} />
          </Route>
          <Route path={`${path}/products`} exact>
            <AdminTemplate />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default ProfileMain;
