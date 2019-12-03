import { forEach } from 'lodash';

import { MutationResolvers, Task, TaskType, TaskTypeFragmentDoc } from '../../graphql/generated';

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
  setTasksType: (parent, { ids, type }, { cache, getCacheKey }) => {
    const currentTime = (new Date()).toJSON();

    forEach(ids, id => {
      const key = getCacheKey({ id, __typename: "Task" }) as string;
      const task = cache.readFragment<Task>({ fragment: TaskTypeFragmentDoc, id: key });

      if (task) {
        const newTask: Task = { ...task, id, type: type };

        if (type === TaskType.Solved) {
          newTask.closingTime = currentTime;
        } else {
          newTask.closingTime = null;
        }

        cache.writeData({ id: key, data: newTask });
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
