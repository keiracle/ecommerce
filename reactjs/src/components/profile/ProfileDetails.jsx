import React from "react";
import styled from "styled-components";
import { Avatar, Row, Col, Tabs } from "antd";
import Button from "../commons/Button";
import EditProfileForm from "./EditProfileForm";

const { TabPane } = Tabs;

const ProfileDetails = ({ user, setUser }) => {
  const { firstName, lastName, phone, gender } = user;

  return (
    <SProfileDetails>
      <Row>
        <Col span={14}>
          <Row gutter={[0, 48]}>
            <Col span={5}>
              <Avatar size={150} icon="user" src="../images/view.png" />
            </Col>
            <Col span={12}>
              <SSelfInfo>
                <SName>{`${firstName} ${lastName}`}</SName>
                <p>{phone}</p>
                <p>{gender}</p>
              </SSelfInfo>
            </Col>
          </Row>
          <Row gutter={[0, 48]}>
            <Col span={24}>
              <Tabs
                defaultActiveKey="1"
                onChange={() => {
                  console.log("newtab");
                }}
              >
                <TabPane tab="Edit Profile" key="1">
                  <EditProfileForm user={user} setUser={setUser} />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
        <Col span={10}>Unknown</Col>
      </Row>
    </SProfileDetails>
  );
};

const SProfileDetails = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

const SSelfInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
  }
`;

const SName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export default ProfileDetails;
