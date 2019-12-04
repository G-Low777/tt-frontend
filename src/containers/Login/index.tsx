import React from "react";
import { Button, Form } from "antd";

import useTitle from "../../hooks/useTitle";
import FormError from "../../components/FormError";
import FieldInput from "../../components/FieldInput";
import { useAuthMutation, useSaveTokenMutation } from "../../graphql/generated";
import parseError from "../../utils/errors";

import { IProps } from "./types";
import { Space } from "./styles";

const loginOptions = {
  rules: [{ required: true, message: "Введите логин" }],
};
const passwordOptions = {
  rules: [{ required: true, message: "Введите пароль" }],
};

const Login: React.FC<IProps> = ({ route, form: { getFieldDecorator, validateFields, getFieldsValue } }: IProps) => {
  useTitle(route);
  const [auth, authResult] = useAuthMutation();
  const [saveToken] = useSaveTokenMutation();
  const error = parseError(authResult.error);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let confirm: boolean = true;
    e.preventDefault();
    validateFields(err => {
      if (err) {
        confirm = false;
      }
    });

    if (!confirm) {
       return false;
    }

    auth({ variables: getFieldsValue() as { login: string, password: string } })
      .then(response => {
        if (response && response.data && response.data.auth) {
          return saveToken({ variables: { token: response.data.auth }});
        }
      });
  };

  return (
    <div key="container">
      {error ? <FormError key="error">{error.message}</FormError> : null}
      <Space key="space-1" />
      <Form key="form" onSubmit={onSubmit}>
        <FieldInput
          key="login"
          name="login"
          label="Логин:"
          placeholder="Username"
          getFieldDecorator={getFieldDecorator}
          options={loginOptions}
        />
        <FieldInput
          key="password"
          name="password"
          type="password"
          label="Пароль:"
          placeholder="×××××××××××××"
          getFieldDecorator={getFieldDecorator}
          options={passwordOptions}
        />
        <Space key="space-2" />
        <Form.Item key="submit">
          <Button
            key="button"
            type="primary"
            htmlType="submit"
            size="large"
            block={true}
            loading={authResult.loading}
          >
            Вход в систему
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: "form-login" })(React.memo(Login));
