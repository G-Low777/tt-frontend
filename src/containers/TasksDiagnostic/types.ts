import { ModalProps } from "antd/lib/modal";

import { IRoutes } from "../../routes/types";
import { Task } from "../../graphql/generated";

export type TTableTask = Task & { key: string };
export interface TParsedTasks {
  all: TTableTask[];
  wrong: TTableTask[];
  correct: TTableTask[];
  solved: TTableTask[];
}

export interface IProps {
  route: IRoutes;
}

export interface IContextMenuProps {
  task: Task;
}

export interface ITableProps {
  loading?: boolean;
  tasks: TTableTask[];
}

export interface IModalsProps {
  tasksIds: number[];
  type?: "error" | "comment";
  visible: ModalProps["visible"];
  onOk: ModalProps["onOk"];
  onCancel: ModalProps["onCancel"];
  oldComment: string | null | undefined;
}