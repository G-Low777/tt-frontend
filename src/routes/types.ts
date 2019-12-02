import { ComponentType } from "react";

export interface IRoutes {
  key: string;
  path: string
  title?: string;
  component: ComponentType<any>;
  childRoutes?: IRoutes[];
}
