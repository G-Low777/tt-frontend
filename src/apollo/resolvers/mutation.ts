import { MutationResolvers, Task, TaskType, TaskIdFragmentDoc } from "../../graphql/generated";

const Mutation: MutationResolvers = {
  saveToken: async (parent, args, { cache }) => {
    localStorage.setItem("token", args.token);
    await cache.writeData({
      data: {
        token: args.token,
        isLoggedIn: true,
      }
    });

    return true;
  },
  setTasksType: async (parent, { ids, type, errorComment }, { cache, getCacheKey }) => {
    const idsCount = ids.length;
    const currentTime = (new Date()).toJSON();

    for (let i: number = 0; i < idsCount; i++) {
      const id = getCacheKey({ id: ids[i], __typename: "Task" }) as string;
      const task = cache.readFragment<Task>({ fragment: TaskIdFragmentDoc, id });

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

        await cache.writeData({ id, data: updatedTask });
      }
    }

    return true;
  },
  setTasksComment: async (parent, { ids, comment }, { cache, getCacheKey }) => {
    const idsCount = ids.length;

    for (let i: number = 0; i < idsCount; i++) {
      const key = getCacheKey({ id: ids[i], __typename: "Task" }) as string;
      const task = cache.readFragment<Task>({ fragment: TaskIdFragmentDoc, id: key });

      if (task) {
        const updatedTask: Task = { ...task, comment };

        await cache.writeData({ id: key, data: updatedTask });
      }
    }

    return true;
  },
  logout: async (parent, args, { cache, client }) => {
    localStorage.removeItem("token");
    await client.resetStore();

    return true;
  },
};

export default Mutation;
