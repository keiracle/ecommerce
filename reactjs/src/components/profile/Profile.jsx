import React, { useState, useEffect, useContext } from "react";
import ProfileSider from "./ProfileSider";
import { Layout } from "antd";
import CustomSpin from "../commons/CustomSpin";
import ProfileMain from "./ProfileMain";
import { profile } from "../../services/userService";
import { UserContext } from "../../context/userProvider";
import _ from "lodash";

const Profile = props => {
  const { user, setUser } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(false);

  const handleSiderCollapse = () => {
    setCollapsed(pre => !pre);
  };

  return (
    <Layout>
      <ProfileSider collapsed={collapsed} />
      {_.isEmpty(user) ? (
        <CustomSpin />
      ) : (
        <ProfileMain
          user={user}
          setUser={setUser}
          collapsed={collapsed}
          handleSiderCollapse={handleSiderCollapse}
        />
      )}
    </Layout>
  );
};

export default Profile;
