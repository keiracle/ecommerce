import React, { useCallback } from 'react';
import * as yup from 'yup';
import styled, { keyframes } from 'styled-components';
import * as authService from '../../services/authService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Antd from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const LoginForm = ({ location }) => {
  const initialValues = { email: '', password: '' };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .min(5, 'Email must have more than 4 character')
      .email()
      .required('Email is required'),
    password: yup
      .string()
      .min(5, 'Password must have more than 4 character')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setErrors, setStatus }) => {
    try {
      await authService.login(values.email, values.password);
      // window.location = location.state ? location.state.from.pathname : "/";
      window.location = '/';
    } catch (error) {
      setErrors({ email: error.response.data });
    }
  };

  const handleLoginDemoAccount = async () => {
    const values = { email: 'kenny@gmail.com', password: '123456' };
    try {
      await authService.login(values.email, values.password);
      // window.location = location.state ? location.state.from.pathname : "/";
      window.location = '/';
    } catch (error) {
      Antd.notification.error({
        message: 'Login fail',
        description: error.message,
      });
    }
  };

  const MyField = useCallback(props => {
    const {
      as,
      name,
      type,
      placeholder,
      prefix,
      handleChange,
      value,
      validateStatus,
      ...rest
    } = props;
    return (
      <>
        <Antd.Form.Item validateStatus={validateStatus}>
          <Field
            as={as}
            name={name}
            type={type}
            placeholder={placeholder}
            prefix={prefix}
            onChange={handleChange}
            value={value}
            {...rest}
          />
          <ErrorMessage
            component={SErrorMessage}
            name={name}
            style={{ display: 'block', margin: '0 0 -24px 0' }}
          />
        </Antd.Form.Item>
      </>
    );
  }, []);

  return (
    <SLoginForm>
      <STitle>
        <p>Welcome back !</p>
        <span>We're so excited to see you again !</span>
      </STitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, errors, touched, handleChange }) => (
          <Form>
            <MyField
              as={Antd.Input}
              name="email"
              type="email"
              placeholder="Enter your email"
              prefix={<FontAwesomeIcon icon="at" />}
              size="large"
              onChange={handleChange}
              value={values.email}
              validateStatus={errors.email && touched.email ? 'error' : ''}
            />
            <MyField
              as={Antd.Input.Password}
              name="password"
              placeholder="Enter your password"
              prefix={<FontAwesomeIcon icon="lock" />}
              size="large"
              onChange={handleChange}
              value={values.password}
              validateStatus={
                errors.password && touched.password ? 'error' : ''
              }
            />
            <Antd.Button
              type="submit"
              disabled={!isValid ? true : _.isEmpty(touched) ? true : false}
            >
              Sign In
            </Antd.Button>
            <Antd.Button
              style={{ marginTop: '10px' }}
              type="button"
              onClick={handleLoginDemoAccount}
            >
              Sign In Demo Account
            </Antd.Button>
          </Form>
        )}
      </Formik>
      <STo>
        <p>
          Need an account ? <Link to={`register`}>Register</Link>
        </p>
      </STo>
    </SLoginForm>
  );
};

const grow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  },
  50% {
    opacity: 1;
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const SLoginForm = styled.div`
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);
  -moz-box-shadow: 1px 0px 12px 0px rgba(158, 158, 158, 1);
  box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);

  & > form {
    & > span {
      margin: 20px 0 5px 0;
    }
  }

  animation: ${grow} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-origin: top;
`;

const STitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  & > p {
    margin: 0;
    font-size: 28px;
  }
`;

const STo = styled.div`
  width: 100%;

  & > p {
    margin-top: 10px;
    margin-bottom: 0;

    & > span {
      cursor: pointer;
    }
  }
`;

const SErrorMessage = styled.span`
  color: red;
`;
export default LoginForm;
