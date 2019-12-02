import { WrappedFormUtils, GetFieldDecoratorOptions } from "antd/lib/form/Form";

export interface IProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  getFieldDecorator: WrappedFormUtils["getFieldDecorator"];
  options: GetFieldDecoratorOptions;
}