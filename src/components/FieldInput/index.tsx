import React from "react";
import { Input } from "antd";

import { IProps } from "./types";
import FormItem from "../FormItem";

const FieldInput: React.FC<IProps> = ({ label, getFieldDecorator, name, options, placeholder, type }) => {
  const Component = type === "password" ? Input.Password : Input;

  return (
    <FormItem key="container" label={label}>
      {getFieldDecorator(name, options)(
        <Component key="input" placeholder={placeholder} size="large" />
      )}
    </FormItem>
  );
};

export default FieldInput;
