import { TaskResolvers, TaskType } from "../../graphql/generated";

const Task: TaskResolvers = {
  type: () => TaskType.Correct,
  closingTime: () => null,
};

export default Task;
