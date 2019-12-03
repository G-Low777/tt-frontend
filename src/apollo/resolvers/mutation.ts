import { forEach } from 'lodash';

import { MutationResolvers, Task, TaskTypeFragmentDoc } from '../../graphql/generated';

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
    const data: Task[] = [];

    forEach(ids, id => {
      const key = getCacheKey({ id, __typename: "Task" }) as string;
      const task = cache.readFragment<Task>({ fragment: TaskTypeFragmentDoc, id: key });

      if (task) {
        const newTask: Task = { ...task, type: type };

        cache.writeData({ id: key, data: newTask });

        data.push(newTask);
      }
    });

    return data;
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
