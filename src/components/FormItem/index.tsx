import React from "react";
import { Form } from "antd";
import { FormItemProps } from "antd/lib/form";

import { Label } from "./styles";

const FormItem: React.FC<FormItemProps> = props => {
  return (
    <Form.Item
      key="container"
      required={false}
      colon={false}
      {...props}
      label={<Label key="label">{props.label}</Label>}
    />
  );
};

export default FormItem;
