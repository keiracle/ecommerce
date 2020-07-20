import React, { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as yup from 'yup';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Antd from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as userService from '../../services/userService';
import _ from 'lodash';
import * as authService from '../../services/authService';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };

  const [gender, setGender] = useState('male');

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, 'Firstname must have more than 1 character')
      .required('Firstname is required'),
    lastName: yup
      .string()
      .min(2, 'Lastname must have more than 1 character')
      .required('Lastname is required'),
    email: yup
      .string()
      .email()
      .min(5, 'Email must have more than 4 character')
      .required('Email is required'),
    password: yup
      .string()
      .min(5, 'Password must have more than 4 character')
      .required('Password is required'),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, 'Phone must be a number')
      .min(8, 'Phone number must have more than 7 number')
      .required('Phone number is required'),
  });

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const response = await userService.register({ ...values, gender });
      authService.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (error) {
      setErrors({ email: error.response.data });
    }
  };

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const MyField = useCallback(props => {
    const {
      as,
      name,
      type,
      label,
      placeholder,
      prefix,
      handleChange,
      value,
      validateStatus,
      ...rest
    } = props;
    return (
      <>
        <Antd.Form.Item validateStatus={validateStatus} label={label}>
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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <SRegisterForm>
      <STitle>
        <p>Create an account</p>
      </STitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          isValid,
          submitCount,
          errors,
          touched,
          handleReset,
          handleSubmit,
          handleChange,
          ...rest
        }) => (
          <Form>
            <Antd.Row gutter={[8, 8]}>
              <Antd.Col span={12}>
                <MyField
                  as={Antd.Input}
                  name="firstName"
                  placeholder="Firstname"
                  prefix={<FontAwesomeIcon icon="user" />}
                  size="large"
                  onChange={handleChange}
                  value={values.firstName}
                  validateStatus={
                    errors.firstName && touched.firstName ? 'error' : ''
                  }
                />
              </Antd.Col>
              <Antd.Col span={12}>
                <MyField
                  as={Antd.Input}
                  name="lastName"
                  placeholder="Lastname"
                  size="large"
                  onChange={handleChange}
                  value={values.lastName}
                  validateStatus={
                    errors.lastName && touched.lastName ? 'error' : ''
                  }
                />
              </Antd.Col>
            </Antd.Row>
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
            <MyField
              as={Antd.Input}
              name="phone"
              placeholder="Enter your phone number"
              prefix={<FontAwesomeIcon icon="phone" />}
              size="large"
              onChange={handleChange}
              value={values.phone}
              validateStatus={errors.phone && touched.phone ? 'error' : ''}
            />
            <Antd.Radio.Group
              onChange={handleGenderChange}
              value={gender}
              style={{ display: 'block' }}
            >
              <Antd.Radio value="male">Male</Antd.Radio>
              <Antd.Radio value="female">Female</Antd.Radio>
            </Antd.Radio.Group>
            <Antd.Button
              type="submit"
              style={{ marginTop: '20px' }}
              disabled={!isValid ? true : _.isEmpty(touched) ? true : false}
            >
              Submit
            </Antd.Button>
          </Form>
        )}
      </Formik>
      <STo>
        <Link to={`login`}>Already have an account ?</Link>
      </STo>
    </SRegisterForm>
  );
};

// const MyField = props => {
//   const { as, name, type, placeholder, prefix, handleChange, value } = props;

//   return (
//     <>
//       <Field
//         as={as}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         prefix={prefix}
//         onChange={handleChange}
//         value={value}
//         {...props}
//       />
//       <ErrorMessage component={SErrorMessage} name={name} />
//     </>
//   );
// };

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

const SRegisterForm = styled.div`
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);
  -moz-box-shadow: 1px 0px 12px 0px rgba(158, 158, 158, 1);
  box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);

  & > form {
    & > span {
    }
  }

  animation: ${grow} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-origin: top;
`;

const STitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const STo = styled.div`
  margin-top: 10px;
`;

const SErrorMessage = styled.span`
  color: red;
`;
export default RegisterForm;
