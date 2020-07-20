import React, { useState, useEffect, useCallback } from "react";
import { profile } from "../../services/userService";
import styled from "styled-components";
import * as Antd from "antd";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../commons/Button";
import { updateProfile } from "../../services/userService";
import _ from "lodash";

// Initial inside or outside will better ? dont know
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

const EditProfileForm = ({ user, setUser }) => {
  const initialValues = {
    firstName: user.firstName || {},
    lastName: user.lastName || {},
    email: user.email || {},
    phone: user.phone || {}
  };

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Firstname must have more than 1 character")
      .required("Firstname is required"),
    lastName: yup
      .string()
      .min(2, "Lastname must have more than 1 character")
      .required("Lastname is required"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Phone must be a number")
      .min(8, "Phone number must have more than 7 number")
      .required("Phone number is required")
  });

  const handleSubmit = async (values, { setErrors }) => {
    const { firstName, lastName, phone, gender = "male" } = values;
    const response = await updateProfile({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender
    });

    setUser({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      phone: response.data.phone,
      gender: response.data.gender
    });
  };

  useEffect(() => {}, []);

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
      help,
      ...rest
    } = props;
    return (
      <>
        <Antd.Form.Item
          validateStatus={validateStatus}
          label={label}
          help={help}
          {...formItemLayout}
        >
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
        </Antd.Form.Item>
      </>
    );
  }, []);

  return (
    <SEditProfileForm>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
          ...rest
        }) => (
          <Form>
            <MyField
              as={Antd.Input}
              name="firstName"
              type="text"
              label="FirstName"
              size="large"
              onChange={handleChange}
              value={values.firstName}
              validateStatus={
                errors.firstName && touched.firstName ? "error" : ""
              }
              help={errors.firstName}
            />
            <MyField
              as={Antd.Input}
              name="lastName"
              type="text"
              label="LastName"
              size="large"
              onChange={handleChange}
              value={values.lastName}
              validateStatus={
                errors.lastName && touched.lastName ? "error" : ""
              }
              help={errors.lastName}
            />
            <MyField
              as={Antd.Input}
              name="email"
              type="email"
              label="Email"
              disabled
              prefix={<FontAwesomeIcon icon="at" />}
              size="large"
              value={values.email}
            />
            <MyField
              as={Antd.Input}
              name="phone"
              type="text"
              label="Phone"
              prefix={<FontAwesomeIcon icon="phone" />}
              size="large"
              onChange={handleChange}
              value={values.phone}
              validateStatus={errors.phone && touched.phone ? "error" : ""}
              help={errors.phone}
            />
            <SButtonGroup>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid ? true : _.isEmpty(touched) ? true : false}
              >
                Save Change
              </Button>
              <Button type="reset" variant="contained" color="secondary">
                Reset
              </Button>
            </SButtonGroup>
          </Form>
        )}
      </Formik>
    </SEditProfileForm>
  );
};

const SEditProfileForm = styled.div`
  width: 100%;
  padding: 10px;
  min-height: 100px;
`;

const SButtonGroup = styled.div`
  width: 50%;
  margin: auto;

  & > button {
    margin: 0 20px;
  }
`;

export default EditProfileForm;
