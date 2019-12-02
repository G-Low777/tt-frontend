import React from "react";
import { Form, Input } from "antd";

import { IProps } from "./types";
import { Label } from "./styles";

const FieldInput: React.FC<IProps> = ({ label, getFieldDecorator, name, options, placeholder, type }) => {
  const Component = type === "password" ? Input.Password : Input;

  return (
    <Form.Item
      key="form-item"
      required={false}
      label={<Label key="label">{label}</Label>}
      colon={false}
    >
      {getFieldDecorator(name, options)(
        <Component key="input" placeholder={placeholder} size="large" />
      )}
    </Form.Item>
  );
};

export default FieldInput;
