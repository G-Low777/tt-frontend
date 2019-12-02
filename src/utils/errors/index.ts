import { ApolloError } from "apollo-client";
import { GraphQLError } from "graphql";

import handlers from "./handlers";
import { TErrorHandler } from "./types";


function getFirstGQLError(error: ApolloError) {
  let errorData;

  if (Array.isArray(error.graphQLErrors)) {
    errorData = error.graphQLErrors[0];
  } else {
    errorData = error.graphQLErrors;
  }

  if (typeof errorData.message === "string" && errorData.message.length > 0) {
    return errorData;
  }

  throw new Error("Неизвестный способ передачи ошибки");
}

function convertGQLError(errorData: GraphQLError) {
  return {
    code: errorData.message,
  };
}

export default function(error?: ApolloError): TErrorHandler | undefined {
  try {
    let errorData;

    if (error && error.graphQLErrors) {
      errorData = convertGQLError(getFirstGQLError(error));
    } else {
      return undefined;
    }

    return handlers[errorData.code];
  } catch (e) {
    return handlers.unknown_error;
  }
}
