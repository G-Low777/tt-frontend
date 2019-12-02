import { FormComponentProps } from "antd/lib/form";

import { IRoutes } from "../../routes/types";

export interface IProps extends FormComponentProps {
  route: IRoutes;
}
