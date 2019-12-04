import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IResolverCtx } from '../apollo/IResolverCtx';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};



export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
   __typename?: 'Mutation',
  /** Авторизация, возвращает токен доступа при успешной авторизации */
  auth?: Maybe<Scalars['String']>,
  /** Сохраняет токен авторизации в браузере */
  saveToken: Scalars['Boolean'],
  /** Меняет тип задач и добавляет сообщение об ошибке */
  setTasksType: Scalars['Boolean'],
  /** Добавляет комментарий к задачам */
  setTasksComment: Scalars['Boolean'],
  /** Выход из системы */
  logout: Scalars['Boolean'],
};


export type MutationAuthArgs = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type MutationSaveTokenArgs = {
  token: Scalars['String']
};


export type MutationSetTasksTypeArgs = {
  ids: Array<Scalars['Int']>,
  type: TaskType,
  errorComment?: Maybe<Scalars['String']>
};


export type MutationSetTasksCommentArgs = {
  ids: Array<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  /** Возвращает список задач */
  tasks?: Maybe<Array<Task>>,
  /** Возвращает информацию о текущем авторизованном пользователе */
  me?: Maybe<User>,
  /** Проверяет, залогинен ли пользователь */
  isLoggedIn: Scalars['Boolean'],
};

export type Task = {
   __typename?: 'Task',
  /** ID задачи в системе */
  id: Scalars['Int'],
  /** Номер в системе */
  number: Scalars['Int'],
  /** Адрес, по которому находится устройство */
  address: Scalars['String'],
  /** Имя управляющей компании, за которой закреплена квартира с устройством */
  mf: Scalars['String'],
  /** Сообщение от устройства */
  message: Scalars['String'],
  /** Модель устройства */
  device: Scalars['String'],
  /** ID устройства */
  deviceId: Scalars['Int'],
  /** Дата создания задачи */
  creationTime: Scalars['Date'],
  /** Тип задачи */
  type: TaskType,
  /** Дата закрытия задачи */
  closingTime?: Maybe<Scalars['Date']>,
  /** Комментарий к задаче */
  comment?: Maybe<Scalars['String']>,
};

export enum TaskType {
  /** Ошибочная */
  Error = 'ERROR',
  /** Правильная */
  Correct = 'CORRECT',
  /** Исправленная */
  Solved = 'SOLVED'
}


export type User = {
   __typename?: 'User',
  /** ID пользователя в системе */
  id: Scalars['Int'],
  /** Логин пользователя */
  login: Scalars['String'],
};

export type AuthMutationVariables = {
  login: Scalars['String'],
  password: Scalars['String']
};


export type AuthMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'auth'>
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SaveTokenMutationVariables = {
  token: Scalars['String']
};


export type SaveTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'saveToken'>
);

export type SetTasksTypeMutationVariables = {
  ids: Array<Scalars['Int']>,
  type: TaskType,
  errorComment?: Maybe<Scalars['String']>
};


export type SetTasksTypeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setTasksType'>
);

export type SetTasksCommentMutationVariables = {
  ids: Array<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>
};


export type SetTasksCommentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setTasksComment'>
);

export type GetTasksQueryVariables = {};


export type GetTasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Maybe<Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'number' | 'address' | 'mf' | 'message' | 'device' | 'deviceId' | 'creationTime' | 'type' | 'closingTime' | 'comment'>
  )>> }
);

export type GetMeQueryVariables = {};


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'login'>
  )> }
);

export type IsLoggedInQueryVariables = {};


export type IsLoggedInQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isLoggedIn'>
);

export type TaskIdFragment = (
  { __typename?: 'Task' }
  & Pick<Task, 'id'>
);



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Task: ResolverTypeWrapper<Task>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  TaskType: TaskType,
  User: ResolverTypeWrapper<User>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Mutation: ResolverTypeWrapper<{}>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Task: Task,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Date: Scalars['Date'],
  TaskType: TaskType,
  User: User,
  Boolean: Scalars['Boolean'],
  Mutation: {},
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = IResolverCtx, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ClientDirectiveResolver<Result, Parent, ContextType = IResolverCtx, Args = {   always?: Maybe<Maybe<Scalars['Boolean']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = IResolverCtx, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  auth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAuthArgs, 'login' | 'password'>>,
  saveToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSaveTokenArgs, 'token'>>,
  setTasksType?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetTasksTypeArgs, 'ids' | 'type'>>,
  setTasksComment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetTasksCommentArgs, 'ids'>>,
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = IResolverCtx, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  tasks?: Resolver<Maybe<Array<ResolversTypes['Task']>>, ParentType, ContextType>,
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  isLoggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type TaskResolvers<ContextType = IResolverCtx, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  mf?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  deviceId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  creationTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['TaskType'], ParentType, ContextType>,
  closingTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = IResolverCtx, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = IResolverCtx> = {
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Task?: TaskResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = IResolverCtx> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = IResolverCtx> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
  client?: ClientDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = IResolverCtx> = DirectiveResolvers<ContextType>;
export const TaskIdFragmentDoc = gql`
    fragment taskId on Task {
  id
}
    `;
export const AuthDocument = gql`
    mutation Auth($login: String!, $password: String!) {
  auth(login: $login, password: $password)
}
    `;
export type AuthMutationFn = ApolloReactCommon.MutationFunction<AuthMutation, AuthMutationVariables>;
export type AuthComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AuthMutation, AuthMutationVariables>, 'mutation'>;

    export const AuthComponent = (props: AuthComponentProps) => (
      <ApolloReactComponents.Mutation<AuthMutation, AuthMutationVariables> mutation={AuthDocument} {...props} />
    );
    

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        return ApolloReactHooks.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, baseOptions);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = ApolloReactCommon.MutationResult<AuthMutation>;
export type AuthMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout @client
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SaveTokenDocument = gql`
    mutation SaveToken($token: String!) {
  saveToken(token: $token) @client
}
    `;
export type SaveTokenMutationFn = ApolloReactCommon.MutationFunction<SaveTokenMutation, SaveTokenMutationVariables>;
export type SaveTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SaveTokenMutation, SaveTokenMutationVariables>, 'mutation'>;

    export const SaveTokenComponent = (props: SaveTokenComponentProps) => (
      <ApolloReactComponents.Mutation<SaveTokenMutation, SaveTokenMutationVariables> mutation={SaveTokenDocument} {...props} />
    );
    

/**
 * __useSaveTokenMutation__
 *
 * To run a mutation, you first call `useSaveTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTokenMutation, { data, loading, error }] = useSaveTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSaveTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveTokenMutation, SaveTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveTokenMutation, SaveTokenMutationVariables>(SaveTokenDocument, baseOptions);
      }
export type SaveTokenMutationHookResult = ReturnType<typeof useSaveTokenMutation>;
export type SaveTokenMutationResult = ApolloReactCommon.MutationResult<SaveTokenMutation>;
export type SaveTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveTokenMutation, SaveTokenMutationVariables>;
export const SetTasksTypeDocument = gql`
    mutation SetTasksType($ids: [Int!]!, $type: TaskType!, $errorComment: String) {
  setTasksType(ids: $ids, type: $type, errorComment: $errorComment) @client
}
    `;
export type SetTasksTypeMutationFn = ApolloReactCommon.MutationFunction<SetTasksTypeMutation, SetTasksTypeMutationVariables>;
export type SetTasksTypeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetTasksTypeMutation, SetTasksTypeMutationVariables>, 'mutation'>;

    export const SetTasksTypeComponent = (props: SetTasksTypeComponentProps) => (
      <ApolloReactComponents.Mutation<SetTasksTypeMutation, SetTasksTypeMutationVariables> mutation={SetTasksTypeDocument} {...props} />
    );
    

/**
 * __useSetTasksTypeMutation__
 *
 * To run a mutation, you first call `useSetTasksTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTasksTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTasksTypeMutation, { data, loading, error }] = useSetTasksTypeMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      type: // value for 'type'
 *      errorComment: // value for 'errorComment'
 *   },
 * });
 */
export function useSetTasksTypeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTasksTypeMutation, SetTasksTypeMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTasksTypeMutation, SetTasksTypeMutationVariables>(SetTasksTypeDocument, baseOptions);
      }
export type SetTasksTypeMutationHookResult = ReturnType<typeof useSetTasksTypeMutation>;
export type SetTasksTypeMutationResult = ApolloReactCommon.MutationResult<SetTasksTypeMutation>;
export type SetTasksTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<SetTasksTypeMutation, SetTasksTypeMutationVariables>;
export const SetTasksCommentDocument = gql`
    mutation SetTasksComment($ids: [Int!]!, $comment: String) {
  setTasksComment(ids: $ids, comment: $comment) @client
}
    `;
export type SetTasksCommentMutationFn = ApolloReactCommon.MutationFunction<SetTasksCommentMutation, SetTasksCommentMutationVariables>;
export type SetTasksCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetTasksCommentMutation, SetTasksCommentMutationVariables>, 'mutation'>;

    export const SetTasksCommentComponent = (props: SetTasksCommentComponentProps) => (
      <ApolloReactComponents.Mutation<SetTasksCommentMutation, SetTasksCommentMutationVariables> mutation={SetTasksCommentDocument} {...props} />
    );
    

/**
 * __useSetTasksCommentMutation__
 *
 * To run a mutation, you first call `useSetTasksCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTasksCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTasksCommentMutation, { data, loading, error }] = useSetTasksCommentMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useSetTasksCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTasksCommentMutation, SetTasksCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTasksCommentMutation, SetTasksCommentMutationVariables>(SetTasksCommentDocument, baseOptions);
      }
export type SetTasksCommentMutationHookResult = ReturnType<typeof useSetTasksCommentMutation>;
export type SetTasksCommentMutationResult = ApolloReactCommon.MutationResult<SetTasksCommentMutation>;
export type SetTasksCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<SetTasksCommentMutation, SetTasksCommentMutationVariables>;
export const GetTasksDocument = gql`
    query getTasks {
  tasks {
    id
    number
    address
    mf
    message
    device
    deviceId
    creationTime
    type @client
    closingTime @client
    comment @client
  }
}
    `;
export type GetTasksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTasksQuery, GetTasksQueryVariables>, 'query'>;

    export const GetTasksComponent = (props: GetTasksComponentProps) => (
      <ApolloReactComponents.Query<GetTasksQuery, GetTasksQueryVariables> query={GetTasksDocument} {...props} />
    );
    

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
      }
export function useGetTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = ApolloReactCommon.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    login
  }
}
    `;
export type GetMeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMeQuery, GetMeQueryVariables>, 'query'>;

    export const GetMeComponent = (props: GetMeComponentProps) => (
      <ApolloReactComponents.Query<GetMeQuery, GetMeQueryVariables> query={GetMeDocument} {...props} />
    );
    

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
      }
export function useGetMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = ApolloReactCommon.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const IsLoggedInDocument = gql`
    query IsLoggedIn {
  isLoggedIn @client
}
    `;
export type IsLoggedInComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IsLoggedInQuery, IsLoggedInQueryVariables>, 'query'>;

    export const IsLoggedInComponent = (props: IsLoggedInComponentProps) => (
      <ApolloReactComponents.Query<IsLoggedInQuery, IsLoggedInQueryVariables> query={IsLoggedInDocument} {...props} />
    );
    

/**
 * __useIsLoggedInQuery__
 *
 * To run a query within a React component, call `useIsLoggedInQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsLoggedInQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsLoggedInQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsLoggedInQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IsLoggedInQuery, IsLoggedInQueryVariables>) {
        return ApolloReactHooks.useQuery<IsLoggedInQuery, IsLoggedInQueryVariables>(IsLoggedInDocument, baseOptions);
      }
export function useIsLoggedInLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsLoggedInQuery, IsLoggedInQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IsLoggedInQuery, IsLoggedInQueryVariables>(IsLoggedInDocument, baseOptions);
        }
export type IsLoggedInQueryHookResult = ReturnType<typeof useIsLoggedInQuery>;
export type IsLoggedInLazyQueryHookResult = ReturnType<typeof useIsLoggedInLazyQuery>;
export type IsLoggedInQueryResult = ApolloReactCommon.QueryResult<IsLoggedInQuery, IsLoggedInQueryVariables>;