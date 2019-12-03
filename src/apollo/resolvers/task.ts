import { TaskResolvers, TaskType } from "../../graphql/generated";

const Task: TaskResolvers = {
  type: () => TaskType.Correct,
  closingTime: () => null,
  comment: () => null,
};

export default Task;
