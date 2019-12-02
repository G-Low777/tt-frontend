import { QueryResolvers, Task, Token } from "../../graphql/generated";
import { map } from "lodash";

const Query: QueryResolvers = {
  getToken: () => {
    const tokenValue = localStorage.getItem("token");

    return {
      id: 1,
      value: tokenValue ? tokenValue : "",
      __typename: "Token",
    };
  },
  tasks: (root) => {
    // @ts-ignore
    return map<Task, Task>(root.tasks, task => {
      return {
        ...task,
        type: "ERROR",
      }
    });
  },
};

export default Query;
