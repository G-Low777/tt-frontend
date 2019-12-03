import { IRoutes } from "../../routes/types";
import { Task } from "../../graphql/generated";

export interface IProps {
  route: IRoutes;
}

export interface IContextMenuProps {
  task: Task;
}