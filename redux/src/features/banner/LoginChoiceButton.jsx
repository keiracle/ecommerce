import React from 'react';
import styled from 'styled-components';
import { Popover, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../user/userSlice';

const LoginChoiceButton = () => {
  const dispatch = useDispatch();

  const handleLoginDemoAccount = async () => {
    const values = { email: 'kenny@gmail.com', password: '123456' };
    dispatch(login(values.email, values.password));
  };

  const content = (
    <SContent>
      <Link to="login">
        <Button type="primary" block>
          With Your Account
        </Button>
      </Link>
      <Button type="dashed" block onClick={handleLoginDemoAccount}>
        With Demo Account
      </Button>
    </SContent>
  );

  return (
    <SLoginChoiceButton>
      <Popover content={content} trigger="click">
        <Button type="default">Login</Button>
      </Popover>
    </SLoginChoiceButton>
  );
};

const SLoginChoiceButton = styled.div`
  position: relative;
  font-size: 1rem;
  text-transform: capitalize;
  color: white;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const SContent = styled.div`
  width: 200px;
  & > * {
    margin-top: 10px;
  }
`;

export default LoginChoiceButton;
