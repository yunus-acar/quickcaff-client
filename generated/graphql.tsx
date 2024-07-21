import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JWT: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
  user: UserPayload;
};

export type CoffeePayload = {
  __typename?: 'CoffeePayload';
  caffeine_content: Scalars['String']['output'];
  coffee: CoffeePayload;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  density: Scalars['String']['output'];
  description: Scalars['String']['output'];
  flavors: Array<Scalars['String']['output']>;
  history: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  jobs: Array<JobPayload>;
  name: Scalars['String']['output'];
  origin: Scalars['String']['output'];
  others: Array<Scalars['String']['output']>;
  pairing_suggestions: Array<Scalars['String']['output']>;
  serving_temperature: Temperature;
  slug: Scalars['String']['output'];
  temperature: Temperature;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  variations: Array<Scalars['String']['output']>;
};

export type CreateCoffeeInput = {
  caffeine_content?: InputMaybe<Scalars['String']['input']>;
  density: Scalars['String']['input'];
  description: Scalars['String']['input'];
  flavors: Array<Scalars['String']['input']>;
  history?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
  imagePath?: InputMaybe<Scalars['String']['input']>;
  jobIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  origin?: InputMaybe<Scalars['String']['input']>;
  others: Array<Scalars['String']['input']>;
  pairing_suggestions: Array<Scalars['String']['input']>;
  serving_temperature: Temperature;
  temperature: Temperature;
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
};

export type JobPayload = {
  __typename?: 'JobPayload';
  coffees: Array<CoffeePayload>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  job: JobPayload;
  name: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCoffee: CoffeePayload;
  createUser: UserPayload;
  deleteUser: Scalars['Boolean']['output'];
  forgotPassword: Scalars['Boolean']['output'];
  login: AuthPayload;
  refreshToken: TokenPayload;
  register: AuthPayload;
  resendEmailVerification: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  updateUser: UserPayload;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationCreateCoffeeArgs = {
  data: CreateCoffeeInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserDto;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: LoginDto;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  data: RegisterDto;
};


export type MutationResendEmailVerificationArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserDto;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getCoffee: CoffeePayload;
  getCoffees: Array<CoffeePayload>;
  getFilterableAttributes: Array<Scalars['String']['output']>;
  getFilteredCoffees: Array<CoffeePayload>;
  getJobById: JobPayload;
  getJobs: Array<JobPayload>;
  getUser: UserPayload;
  getUsers: UsersPayload;
};


export type QueryGetCoffeeArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetFilterableAttributesArgs = {
  density?: InputMaybe<Scalars['String']['input']>;
  flavors?: InputMaybe<Array<Scalars['String']['input']>>;
  key: Scalars['String']['input'];
  others?: InputMaybe<Array<Scalars['String']['input']>>;
  pairing_suggestions?: InputMaybe<Array<Scalars['String']['input']>>;
  temperature?: InputMaybe<Temperature>;
};


export type QueryGetFilteredCoffeesArgs = {
  density: Scalars['String']['input'];
  flavors: Array<Scalars['String']['input']>;
  others?: InputMaybe<Array<Scalars['String']['input']>>;
  pairing_suggestions: Array<Scalars['String']['input']>;
  temperature: Temperature;
};


export type QueryGetJobByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUsersArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type RegisterDto = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** User's role */
export enum Role {
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
  User = 'User'
}

/** The temperature of the coffee */
export enum Temperature {
  Hot = 'HOT',
  Iced = 'ICED'
}

export type TokenPayload = {
  __typename?: 'TokenPayload';
  /** JWT access token */
  accessToken: Scalars['JWT']['output'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type UpdateUserDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  job?: Maybe<JobPayload>;
  jobId?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  role: Role;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  count: Scalars['Int']['output'];
  users: Array<UserPayload>;
};

export type CoffeesFragment = { __typename?: 'CoffeePayload', id: number, image: string, name: string, slug: string, description: string, temperature: Temperature, caffeine_content: string };

export type GetCoffeeQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCoffeeQuery = { __typename?: 'Query', getCoffee: { __typename?: 'CoffeePayload', caffeine_content: string, createdAt: any, density: string, description: string, flavors: Array<string>, history: string, id: number, image: string, name: string, origin: string, others: Array<string>, pairing_suggestions: Array<string>, serving_temperature: Temperature, slug: string, temperature: Temperature, updatedAt: any, variations: Array<string> } };

export type CoffeeFragment = { __typename?: 'CoffeePayload', caffeine_content: string, createdAt: any, density: string, description: string, flavors: Array<string>, history: string, id: number, image: string, name: string, origin: string, others: Array<string>, pairing_suggestions: Array<string>, serving_temperature: Temperature, slug: string, temperature: Temperature, updatedAt: any, variations: Array<string> };

export type GetFilterableAttributesQueryVariables = Exact<{
  key: Scalars['String']['input'];
  temperature?: InputMaybe<Temperature>;
  density?: InputMaybe<Scalars['String']['input']>;
  flavors?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  others?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  pairingSuggestions?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetFilterableAttributesQuery = { __typename?: 'Query', getFilterableAttributes: Array<string> };

export type GetFilteredCoffeesQueryVariables = Exact<{
  density: Scalars['String']['input'];
  flavors: Array<Scalars['String']['input']> | Scalars['String']['input'];
  pairingSuggestions: Array<Scalars['String']['input']> | Scalars['String']['input'];
  temperature: Temperature;
  others?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetFilteredCoffeesQuery = { __typename?: 'Query', getFilteredCoffees: Array<{ __typename?: 'CoffeePayload', id: number, image: string, name: string, slug: string, description: string, temperature: Temperature, caffeine_content: string }> };

export type GetJobByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetJobByIdQuery = { __typename?: 'Query', getJobById: { __typename?: 'JobPayload', id: number, name: string, description?: string | null, coffees: Array<{ __typename?: 'CoffeePayload', id: number, image: string, name: string, slug: string, description: string, temperature: Temperature, caffeine_content: string }> } };

export type JobFragment = { __typename?: 'JobPayload', id: number, name: string, description?: string | null, coffees: Array<{ __typename?: 'CoffeePayload', id: number, image: string, name: string, slug: string, description: string, temperature: Temperature, caffeine_content: string }> };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', getJobs: Array<{ __typename?: 'JobPayload', id: number, name: string, description?: string | null }> };

export type JobsFragment = { __typename?: 'JobPayload', id: number, name: string, description?: string | null };

export const CoffeeFragmentDoc = gql`
    fragment Coffee on CoffeePayload {
  caffeine_content
  createdAt
  density
  description
  flavors
  history
  id
  image
  name
  origin
  others
  pairing_suggestions
  serving_temperature
  slug
  temperature
  updatedAt
  variations
}
    `;
export const CoffeesFragmentDoc = gql`
    fragment Coffees on CoffeePayload {
  id
  image
  name
  slug
  description
  temperature
  caffeine_content
}
    `;
export const JobFragmentDoc = gql`
    fragment Job on JobPayload {
  id
  name
  description
  coffees {
    ...Coffees
  }
}
    ${CoffeesFragmentDoc}`;
export const JobsFragmentDoc = gql`
    fragment Jobs on JobPayload {
  id
  name
  description
}
    `;
export const GetCoffeeDocument = gql`
    query GetCoffee($slug: String!) {
  getCoffee(slug: $slug) {
    ...Coffee
  }
}
    ${CoffeeFragmentDoc}`;

/**
 * __useGetCoffeeQuery__
 *
 * To run a query within a React component, call `useGetCoffeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoffeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoffeeQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCoffeeQuery(baseOptions: Apollo.QueryHookOptions<GetCoffeeQuery, GetCoffeeQueryVariables> & ({ variables: GetCoffeeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoffeeQuery, GetCoffeeQueryVariables>(GetCoffeeDocument, options);
      }
export function useGetCoffeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoffeeQuery, GetCoffeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoffeeQuery, GetCoffeeQueryVariables>(GetCoffeeDocument, options);
        }
export function useGetCoffeeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCoffeeQuery, GetCoffeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCoffeeQuery, GetCoffeeQueryVariables>(GetCoffeeDocument, options);
        }
export type GetCoffeeQueryHookResult = ReturnType<typeof useGetCoffeeQuery>;
export type GetCoffeeLazyQueryHookResult = ReturnType<typeof useGetCoffeeLazyQuery>;
export type GetCoffeeSuspenseQueryHookResult = ReturnType<typeof useGetCoffeeSuspenseQuery>;
export type GetCoffeeQueryResult = Apollo.QueryResult<GetCoffeeQuery, GetCoffeeQueryVariables>;
export const GetFilterableAttributesDocument = gql`
    query GetFilterableAttributes($key: String!, $temperature: Temperature, $density: String, $flavors: [String!], $others: [String!], $pairingSuggestions: [String!]) {
  getFilterableAttributes(
    key: $key
    temperature: $temperature
    density: $density
    flavors: $flavors
    others: $others
    pairing_suggestions: $pairingSuggestions
  )
}
    `;

/**
 * __useGetFilterableAttributesQuery__
 *
 * To run a query within a React component, call `useGetFilterableAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterableAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterableAttributesQuery({
 *   variables: {
 *      key: // value for 'key'
 *      temperature: // value for 'temperature'
 *      density: // value for 'density'
 *      flavors: // value for 'flavors'
 *      others: // value for 'others'
 *      pairingSuggestions: // value for 'pairingSuggestions'
 *   },
 * });
 */
export function useGetFilterableAttributesQuery(baseOptions: Apollo.QueryHookOptions<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables> & ({ variables: GetFilterableAttributesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables>(GetFilterableAttributesDocument, options);
      }
export function useGetFilterableAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables>(GetFilterableAttributesDocument, options);
        }
export function useGetFilterableAttributesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables>(GetFilterableAttributesDocument, options);
        }
export type GetFilterableAttributesQueryHookResult = ReturnType<typeof useGetFilterableAttributesQuery>;
export type GetFilterableAttributesLazyQueryHookResult = ReturnType<typeof useGetFilterableAttributesLazyQuery>;
export type GetFilterableAttributesSuspenseQueryHookResult = ReturnType<typeof useGetFilterableAttributesSuspenseQuery>;
export type GetFilterableAttributesQueryResult = Apollo.QueryResult<GetFilterableAttributesQuery, GetFilterableAttributesQueryVariables>;
export const GetFilteredCoffeesDocument = gql`
    query GetFilteredCoffees($density: String!, $flavors: [String!]!, $pairingSuggestions: [String!]!, $temperature: Temperature!, $others: [String!]) {
  getFilteredCoffees(
    density: $density
    flavors: $flavors
    pairing_suggestions: $pairingSuggestions
    temperature: $temperature
    others: $others
  ) {
    ...Coffees
  }
}
    ${CoffeesFragmentDoc}`;

/**
 * __useGetFilteredCoffeesQuery__
 *
 * To run a query within a React component, call `useGetFilteredCoffeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredCoffeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredCoffeesQuery({
 *   variables: {
 *      density: // value for 'density'
 *      flavors: // value for 'flavors'
 *      pairingSuggestions: // value for 'pairingSuggestions'
 *      temperature: // value for 'temperature'
 *      others: // value for 'others'
 *   },
 * });
 */
export function useGetFilteredCoffeesQuery(baseOptions: Apollo.QueryHookOptions<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables> & ({ variables: GetFilteredCoffeesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables>(GetFilteredCoffeesDocument, options);
      }
export function useGetFilteredCoffeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables>(GetFilteredCoffeesDocument, options);
        }
export function useGetFilteredCoffeesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables>(GetFilteredCoffeesDocument, options);
        }
export type GetFilteredCoffeesQueryHookResult = ReturnType<typeof useGetFilteredCoffeesQuery>;
export type GetFilteredCoffeesLazyQueryHookResult = ReturnType<typeof useGetFilteredCoffeesLazyQuery>;
export type GetFilteredCoffeesSuspenseQueryHookResult = ReturnType<typeof useGetFilteredCoffeesSuspenseQuery>;
export type GetFilteredCoffeesQueryResult = Apollo.QueryResult<GetFilteredCoffeesQuery, GetFilteredCoffeesQueryVariables>;
export const GetJobByIdDocument = gql`
    query GetJobById($id: Int!) {
  getJobById(id: $id) {
    ...Job
  }
}
    ${JobFragmentDoc}`;

/**
 * __useGetJobByIdQuery__
 *
 * To run a query within a React component, call `useGetJobByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetJobByIdQuery(baseOptions: Apollo.QueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables> & ({ variables: GetJobByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
      }
export function useGetJobByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
        }
export function useGetJobByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetJobByIdQuery, GetJobByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobByIdQuery, GetJobByIdQueryVariables>(GetJobByIdDocument, options);
        }
export type GetJobByIdQueryHookResult = ReturnType<typeof useGetJobByIdQuery>;
export type GetJobByIdLazyQueryHookResult = ReturnType<typeof useGetJobByIdLazyQuery>;
export type GetJobByIdSuspenseQueryHookResult = ReturnType<typeof useGetJobByIdSuspenseQuery>;
export type GetJobByIdQueryResult = Apollo.QueryResult<GetJobByIdQuery, GetJobByIdQueryVariables>;
export const GetJobsDocument = gql`
    query GetJobs {
  getJobs {
    ...Jobs
  }
}
    ${JobsFragmentDoc}`;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export function useGetJobsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsSuspenseQueryHookResult = ReturnType<typeof useGetJobsSuspenseQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;