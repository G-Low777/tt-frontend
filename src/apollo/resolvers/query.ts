import { QueryResolvers } from "../../graphql/generated";

const Query: QueryResolvers = {
  isLoggedIn: () => !!localStorage.getItem("token"),
};

export default Query;
