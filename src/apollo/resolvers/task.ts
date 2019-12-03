import { TaskResolvers, TaskType } from "../../graphql/generated";

const Task: TaskResolvers = {
  type: () => {
    return TaskType.Correct;
  }
};

export default Task;
