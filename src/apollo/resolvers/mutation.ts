import { forEach } from "lodash";

import { MutationResolvers, Task, TaskType, TaskIdFragmentDoc } from "../../graphql/generated";

const Mutation: MutationResolvers = {
  saveToken: (parent, args, { cache }) => {
    const token = {
      id: 1,
      value: args.token,
      __typename: "Token" as const,
    };

    cache.writeData({ data: token });

    return token;
  },
  setTasksType: (parent, { ids, type, errorComment }, { cache, getCacheKey }) => {
    const currentTime = (new Date()).toJSON();

    forEach(ids, id => {
      const key = getCacheKey({ id, __typename: "Task" }) as string;
      const task = cache.readFragment<Task>({ fragment: TaskIdFragmentDoc, id: key });

      if (task) {
        const updatedTask: Task = { ...task, type: type };

        if (type === TaskType.Solved) {
          updatedTask.closingTime = currentTime;
        } else {
          updatedTask.closingTime = null;
        }

        if (type === TaskType.Error && errorComment) {
          updatedTask.comment = errorComment;
        }

        cache.writeData({ id: key, data: updatedTask });
      }
    });

    return true;
  },
  setTasksComment: (parent, { ids, comment }, { cache, getCacheKey }) => {
    forEach(ids, id => {
      const key = getCacheKey({ id, __typename: "Task" }) as string;
      const task = cache.readFragment<Task>({ fragment: TaskIdFragmentDoc, id: key });

      if (task) {
        const updatedTask: Task = { ...task, comment };

        cache.writeData({ id: key, data: updatedTask });
      }
    });

    return true;
  },
  logout: async (parent, args, { cache }) => {
    localStorage.removeItem("token");
    const token = {
      id: 1,
      value: "",
      __typename: "Token" as const,
    };

    cache.writeData({ data: token });

    return token;
  },
};

export default Mutation;
