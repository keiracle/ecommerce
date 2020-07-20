import React, { useState, useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const ProfileSider = (props) => {
  const { collapsed } = props;

  let { url } = useRouteMatch();

  const [chooseKeys, setChooseKeys] = useState(["sub1"]);

  // Submenu keys of first level
  const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  const handleOpenChange = (openKeys) => {
    const lastedOpenKey = openKeys.find(
      (key) => chooseKeys.indexOf(key) === -1
    );

    if (rootSubmenuKeys.indexOf(lastedOpenKey) === -1) {
      setChooseKeys(openKeys);
    } else {
      setChooseKeys(lastedOpenKey ? [lastedOpenKey] : []);
    }
  };

  return (
    <SSider trigger={null} collapsible collapsed={collapsed}>
      <h4>Logo</h4>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        openKeys={chooseKeys}
        onOpenChange={handleOpenChange}
      >
        <Menu.Item key="1">
          <Link to={`${url}/details`} />
          <Icon type="user" />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`${url}/wishlist`} />
          <Icon type="heart" />
          <span>Wish List</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="setting" theme="filled" />
              <span>Admin</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to={`${url}/products`} />
            <span>Products</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={`${url}/orders`} />
            <span>Orders</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </SSider>
  );
};

const SSider = styled(Sider)`
  width: 256;

  span {
    font-size: 1rem;
  }
`;

export default ProfileSider;
