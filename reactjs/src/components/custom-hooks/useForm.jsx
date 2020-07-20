import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import Input from "../commons/Input";
import ButtonAttractive from "../commons/ButtonAttractive";

const useForm = (submit, schema) => {
  //uncontrolled -> controlled
  //if not create ""
  //-> undentified -> input value -> undentifed -> uncontrolled
  //typed something -> controlled
  //must solve this problem to make useForm reuseable
  //between email and username
  //if have email && username -> submit button dont enable
  //if have 1 of those -> not reuseable
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  //return error || null
  //return null to using this for disabled submit
  //validate entire form when click submit
  const validate = () => {
    const { error } = Joi.validate(values, schema, {
      abortEarly: false
    });

    if (!error) return null;

    let errors = {};
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  //validate field
  //validate when form change UI/UX experience
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const _schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, _schema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errs = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errs[input.name] = errorMessage;
    else delete errs[input.name];

    setValues({
      ...values,
      [input.name]: input.value
    });

    setErrors({
      ...errs
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validate();

    setErrors(errors || {});
    if (errors) return;

    submit();
  };

  const renderInput = (name, label, type = "text") => {
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={values[name]}
        error={errors[name]}
        onChange={handleChange}
      />
    );
  };

  const renderButton = name => {
    return <ButtonAttractive disabled={validate()}>{name}</ButtonAttractive>;
  };

  return {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    renderInput,
    renderButton
  };
};

export default useForm;
