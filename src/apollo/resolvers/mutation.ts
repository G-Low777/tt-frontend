import { MutationResolvers } from "../../graphql/generated";

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
