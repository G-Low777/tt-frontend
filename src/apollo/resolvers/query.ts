import { QueryResolvers, Token } from "../../graphql/generated";

const Query: QueryResolvers = {
  getToken: () => {
    const tokenValue = localStorage.getItem("token");

    return {
      id: 1,
      value: tokenValue ? tokenValue : "",
      __typename: "Token",
    };
  },
};

export default Query;
