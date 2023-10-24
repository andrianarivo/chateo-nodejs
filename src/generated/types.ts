import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  ObjectId: any;
};

export type Admin = {
  __typename?: 'Admin';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<Auth>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminBy = {
  __typename?: 'AdminBy';
  entity: Admin;
};

export type AdminDeleted = {
  __typename?: 'AdminDeleted';
  entity: Admin;
  message: Scalars['String'];
};

export type AdminDeletedResult = AdminDeleted | AdminNotFound;

export type AdminNotFound = {
  __typename?: 'AdminNotFound';
  message: Scalars['String'];
};

export type AdminResult = AdminBy | AdminNotFound;

export type AdminUpdated = {
  __typename?: 'AdminUpdated';
  entity: Admin;
  message: Scalars['String'];
};

export type AdminUpdatedInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type AdminUpdatedResult = AdminNotFound | AdminUpdated;

export type Admins = {
  __typename?: 'Admins';
  entities: Array<Admin>;
};

export type AdminsResult = AdminNotFound | Admins;

export type Auth = {
  __typename?: 'Auth';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthError = {
  __typename?: 'AuthError';
  message: Scalars['String'];
};

export type FilterCondition = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
};

export type FilterInput = {
  content?: InputMaybe<FilterCondition>;
  title?: InputMaybe<FilterCondition>;
};

export type Login = {
  __typename?: 'Login';
  message: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = AuthError | Login;

export type Logout = {
  __typename?: 'Logout';
  message: Scalars['String'];
};

export type LogoutResult = AuthError | Logout;

export type Message = {
  __typename?: 'Message';
  _id?: Maybe<Scalars['ObjectId']>;
  author: User;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  room: Scalars['ObjectId'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageBy = {
  __typename?: 'MessageBy';
  entity: Message;
};

export type MessageCreated = {
  __typename?: 'MessageCreated';
  entity: Message;
  message: Scalars['String'];
};

export type MessageCreatedInput = {
  author: Scalars['ObjectId'];
  content: Scalars['String'];
  room: Scalars['ObjectId'];
};

export type MessageCreatedResult = MessageCreated | MessageNotFound;

export type MessageNotFound = {
  __typename?: 'MessageNotFound';
  message: Scalars['String'];
};

export type MessageRemoved = {
  __typename?: 'MessageRemoved';
  entity: Message;
  message: Scalars['String'];
};

export type MessageRemovedResult = MessageNotFound | MessageRemoved;

export type MessageResult = MessageBy | MessageNotFound;

export type MessageUpdated = {
  __typename?: 'MessageUpdated';
  entity: Message;
  message: Scalars['String'];
};

export type MessageUpdatedInput = {
  content: Scalars['String'];
};

export type MessageUpdatedResult = MessageNotFound | MessageUpdated;

export type Messages = {
  __typename?: 'Messages';
  entities: Array<Message>;
};

export type MessagesResult = MessageNotFound | Messages;

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: MessageCreatedResult;
  createRoom: RoomCreatedResult;
  deleteAdmin: AdminDeletedResult;
  deleteUser: UserDeletedResult;
  login: LoginResult;
  logout: LogoutResult;
  refresh: RefreshResult;
  register: RegisterResult;
  removeMessage: MessageRemovedResult;
  removeRoom: RoomRemovedResult;
  updateAdmin: AdminUpdatedResult;
  updateMessage: MessageUpdatedResult;
  updateRoom: RoomUpdatedResult;
  updateUser: UserUpdatedResult;
};


export type MutationCreateMessageArgs = {
  input: MessageCreatedInput;
};


export type MutationCreateRoomArgs = {
  input: RoomCreatedInput;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ObjectId'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ObjectId'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveMessageArgs = {
  id: Scalars['ObjectId'];
};


export type MutationRemoveRoomArgs = {
  id: Scalars['ObjectId'];
};


export type MutationUpdateAdminArgs = {
  id: Scalars['ObjectId'];
  input: AdminUpdatedInput;
};


export type MutationUpdateMessageArgs = {
  id: Scalars['ObjectId'];
  input: MessageUpdatedInput;
};


export type MutationUpdateRoomArgs = {
  id: Scalars['ObjectId'];
  input: RoomUpdatedInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ObjectId'];
  input: UserUpdatedInput;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getAdminByField: AdminResult;
  getAdminById: AdminResult;
  getAllAdmins: AdminsResult;
  getAllMessages: MessagesResult;
  getAllRooms: RoomsResult;
  getAllUsers: UsersResult;
  getMe: UserResult;
  getMessageByField: MessageResult;
  getMessageById: MessageResult;
  getMessagesByRoom: MessagesResult;
  getRoomByField: RoomResult;
  getRoomById: RoomResult;
  getUserByField: UserResult;
  getUserById: UserResult;
};


export type QueryGetAdminByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetAdminByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetAllAdminsArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllMessagesArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllRoomsArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllUsersArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetMessageByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetMessageByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetMessagesByRoomArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  room: Scalars['ObjectId'];
  sort?: InputMaybe<SortInput>;
};


export type QueryGetRoomByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetRoomByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetUserByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ObjectId'];
};

export type Refresh = {
  __typename?: 'Refresh';
  message: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type RefreshResult = AuthError | Refresh;

export type Register = {
  __typename?: 'Register';
  message: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
};

export type RegisterResult = AuthError | Register;

export type Room = {
  __typename?: 'Room';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoomBy = {
  __typename?: 'RoomBy';
  entity: Room;
};

export type RoomCreated = {
  __typename?: 'RoomCreated';
  entity: Room;
  message: Scalars['String'];
};

export type RoomCreatedInput = {
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type RoomCreatedResult = RoomCreated | RoomNotFound;

export type RoomNotFound = {
  __typename?: 'RoomNotFound';
  message: Scalars['String'];
};

export type RoomRemoved = {
  __typename?: 'RoomRemoved';
  entity: Room;
  message: Scalars['String'];
};

export type RoomRemovedResult = RoomNotFound | RoomRemoved;

export type RoomResult = RoomBy | RoomNotFound;

export type RoomUpdated = {
  __typename?: 'RoomUpdated';
  entity: Room;
  message: Scalars['String'];
};

export type RoomUpdatedInput = {
  name: Scalars['String'];
};

export type RoomUpdatedResult = RoomNotFound | RoomUpdated;

export type Rooms = {
  __typename?: 'Rooms';
  entities: Array<Room>;
};

export type RoomsResult = RoomNotFound | Rooms;

export type SortInput = {
  field?: InputMaybe<SortableField>;
  order?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SortableField {
  CreatedAt = 'createdAt'
}

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<Auth>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserBy = {
  __typename?: 'UserBy';
  entity: User;
};

export type UserDeleted = {
  __typename?: 'UserDeleted';
  entity: User;
  message: Scalars['String'];
};

export type UserDeletedResult = UserDeleted | UserNotFound;

export type UserNotFound = {
  __typename?: 'UserNotFound';
  message: Scalars['String'];
};

export type UserResult = UserBy | UserNotFound;

export type UserUpdated = {
  __typename?: 'UserUpdated';
  entity: User;
  message: Scalars['String'];
};

export type UserUpdatedInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UserUpdatedResult = UserNotFound | UserUpdated;

export type Users = {
  __typename?: 'Users';
  entities: Array<User>;
};

export type UsersResult = UserNotFound | Users;



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Admin: ResolverTypeWrapper<Admin>;
  AdminBy: ResolverTypeWrapper<AdminBy>;
  AdminDeleted: ResolverTypeWrapper<AdminDeleted>;
  AdminDeletedResult: ResolversTypes['AdminDeleted'] | ResolversTypes['AdminNotFound'];
  AdminNotFound: ResolverTypeWrapper<AdminNotFound>;
  AdminResult: ResolversTypes['AdminBy'] | ResolversTypes['AdminNotFound'];
  AdminUpdated: ResolverTypeWrapper<AdminUpdated>;
  AdminUpdatedInput: AdminUpdatedInput;
  AdminUpdatedResult: ResolversTypes['AdminNotFound'] | ResolversTypes['AdminUpdated'];
  Admins: ResolverTypeWrapper<Admins>;
  AdminsResult: ResolversTypes['AdminNotFound'] | ResolversTypes['Admins'];
  Auth: ResolverTypeWrapper<Auth>;
  AuthError: ResolverTypeWrapper<AuthError>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FilterCondition: FilterCondition;
  FilterInput: FilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Login: ResolverTypeWrapper<Login>;
  LoginInput: LoginInput;
  LoginResult: ResolversTypes['AuthError'] | ResolversTypes['Login'];
  Logout: ResolverTypeWrapper<Logout>;
  LogoutResult: ResolversTypes['AuthError'] | ResolversTypes['Logout'];
  Message: ResolverTypeWrapper<Message>;
  MessageBy: ResolverTypeWrapper<MessageBy>;
  MessageCreated: ResolverTypeWrapper<MessageCreated>;
  MessageCreatedInput: MessageCreatedInput;
  MessageCreatedResult: ResolversTypes['MessageCreated'] | ResolversTypes['MessageNotFound'];
  MessageNotFound: ResolverTypeWrapper<MessageNotFound>;
  MessageRemoved: ResolverTypeWrapper<MessageRemoved>;
  MessageRemovedResult: ResolversTypes['MessageNotFound'] | ResolversTypes['MessageRemoved'];
  MessageResult: ResolversTypes['MessageBy'] | ResolversTypes['MessageNotFound'];
  MessageUpdated: ResolverTypeWrapper<MessageUpdated>;
  MessageUpdatedInput: MessageUpdatedInput;
  MessageUpdatedResult: ResolversTypes['MessageNotFound'] | ResolversTypes['MessageUpdated'];
  Messages: ResolverTypeWrapper<Messages>;
  MessagesResult: ResolversTypes['MessageNotFound'] | ResolversTypes['Messages'];
  Mutation: ResolverTypeWrapper<{}>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
  PaginationInput: PaginationInput;
  Query: ResolverTypeWrapper<{}>;
  Refresh: ResolverTypeWrapper<Refresh>;
  RefreshResult: ResolversTypes['AuthError'] | ResolversTypes['Refresh'];
  Register: ResolverTypeWrapper<Register>;
  RegisterInput: RegisterInput;
  RegisterResult: ResolversTypes['AuthError'] | ResolversTypes['Register'];
  Room: ResolverTypeWrapper<Room>;
  RoomBy: ResolverTypeWrapper<RoomBy>;
  RoomCreated: ResolverTypeWrapper<RoomCreated>;
  RoomCreatedInput: RoomCreatedInput;
  RoomCreatedResult: ResolversTypes['RoomCreated'] | ResolversTypes['RoomNotFound'];
  RoomNotFound: ResolverTypeWrapper<RoomNotFound>;
  RoomRemoved: ResolverTypeWrapper<RoomRemoved>;
  RoomRemovedResult: ResolversTypes['RoomNotFound'] | ResolversTypes['RoomRemoved'];
  RoomResult: ResolversTypes['RoomBy'] | ResolversTypes['RoomNotFound'];
  RoomUpdated: ResolverTypeWrapper<RoomUpdated>;
  RoomUpdatedInput: RoomUpdatedInput;
  RoomUpdatedResult: ResolversTypes['RoomNotFound'] | ResolversTypes['RoomUpdated'];
  Rooms: ResolverTypeWrapper<Rooms>;
  RoomsResult: ResolversTypes['RoomNotFound'] | ResolversTypes['Rooms'];
  SortInput: SortInput;
  SortOrder: SortOrder;
  SortableField: SortableField;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserBy: ResolverTypeWrapper<UserBy>;
  UserDeleted: ResolverTypeWrapper<UserDeleted>;
  UserDeletedResult: ResolversTypes['UserDeleted'] | ResolversTypes['UserNotFound'];
  UserNotFound: ResolverTypeWrapper<UserNotFound>;
  UserResult: ResolversTypes['UserBy'] | ResolversTypes['UserNotFound'];
  UserUpdated: ResolverTypeWrapper<UserUpdated>;
  UserUpdatedInput: UserUpdatedInput;
  UserUpdatedResult: ResolversTypes['UserNotFound'] | ResolversTypes['UserUpdated'];
  Users: ResolverTypeWrapper<Users>;
  UsersResult: ResolversTypes['UserNotFound'] | ResolversTypes['Users'];
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Admin: Admin;
  AdminBy: AdminBy;
  AdminDeleted: AdminDeleted;
  AdminDeletedResult: ResolversParentTypes['AdminDeleted'] | ResolversParentTypes['AdminNotFound'];
  AdminNotFound: AdminNotFound;
  AdminResult: ResolversParentTypes['AdminBy'] | ResolversParentTypes['AdminNotFound'];
  AdminUpdated: AdminUpdated;
  AdminUpdatedInput: AdminUpdatedInput;
  AdminUpdatedResult: ResolversParentTypes['AdminNotFound'] | ResolversParentTypes['AdminUpdated'];
  Admins: Admins;
  AdminsResult: ResolversParentTypes['AdminNotFound'] | ResolversParentTypes['Admins'];
  Auth: Auth;
  AuthError: AuthError;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  FilterCondition: FilterCondition;
  FilterInput: FilterInput;
  Int: Scalars['Int'];
  Login: Login;
  LoginInput: LoginInput;
  LoginResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Login'];
  Logout: Logout;
  LogoutResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Logout'];
  Message: Message;
  MessageBy: MessageBy;
  MessageCreated: MessageCreated;
  MessageCreatedInput: MessageCreatedInput;
  MessageCreatedResult: ResolversParentTypes['MessageCreated'] | ResolversParentTypes['MessageNotFound'];
  MessageNotFound: MessageNotFound;
  MessageRemoved: MessageRemoved;
  MessageRemovedResult: ResolversParentTypes['MessageNotFound'] | ResolversParentTypes['MessageRemoved'];
  MessageResult: ResolversParentTypes['MessageBy'] | ResolversParentTypes['MessageNotFound'];
  MessageUpdated: MessageUpdated;
  MessageUpdatedInput: MessageUpdatedInput;
  MessageUpdatedResult: ResolversParentTypes['MessageNotFound'] | ResolversParentTypes['MessageUpdated'];
  Messages: Messages;
  MessagesResult: ResolversParentTypes['MessageNotFound'] | ResolversParentTypes['Messages'];
  Mutation: {};
  ObjectId: Scalars['ObjectId'];
  PaginationInput: PaginationInput;
  Query: {};
  Refresh: Refresh;
  RefreshResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Refresh'];
  Register: Register;
  RegisterInput: RegisterInput;
  RegisterResult: ResolversParentTypes['AuthError'] | ResolversParentTypes['Register'];
  Room: Room;
  RoomBy: RoomBy;
  RoomCreated: RoomCreated;
  RoomCreatedInput: RoomCreatedInput;
  RoomCreatedResult: ResolversParentTypes['RoomCreated'] | ResolversParentTypes['RoomNotFound'];
  RoomNotFound: RoomNotFound;
  RoomRemoved: RoomRemoved;
  RoomRemovedResult: ResolversParentTypes['RoomNotFound'] | ResolversParentTypes['RoomRemoved'];
  RoomResult: ResolversParentTypes['RoomBy'] | ResolversParentTypes['RoomNotFound'];
  RoomUpdated: RoomUpdated;
  RoomUpdatedInput: RoomUpdatedInput;
  RoomUpdatedResult: ResolversParentTypes['RoomNotFound'] | ResolversParentTypes['RoomUpdated'];
  Rooms: Rooms;
  RoomsResult: ResolversParentTypes['RoomNotFound'] | ResolversParentTypes['Rooms'];
  SortInput: SortInput;
  String: Scalars['String'];
  User: User;
  UserBy: UserBy;
  UserDeleted: UserDeleted;
  UserDeletedResult: ResolversParentTypes['UserDeleted'] | ResolversParentTypes['UserNotFound'];
  UserNotFound: UserNotFound;
  UserResult: ResolversParentTypes['UserBy'] | ResolversParentTypes['UserNotFound'];
  UserUpdated: UserUpdated;
  UserUpdatedInput: UserUpdatedInput;
  UserUpdatedResult: ResolversParentTypes['UserNotFound'] | ResolversParentTypes['UserUpdated'];
  Users: Users;
  UsersResult: ResolversParentTypes['UserNotFound'] | ResolversParentTypes['Users'];
};

export type AdminResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminBy'] = ResolversParentTypes['AdminBy']> = {
  entity?: Resolver<ResolversTypes['Admin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminDeletedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminDeleted'] = ResolversParentTypes['AdminDeleted']> = {
  entity?: Resolver<ResolversTypes['Admin'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminDeletedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminDeletedResult'] = ResolversParentTypes['AdminDeletedResult']> = {
  __resolveType: TypeResolveFn<'AdminDeleted' | 'AdminNotFound', ParentType, ContextType>;
};

export type AdminNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminNotFound'] = ResolversParentTypes['AdminNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminResult'] = ResolversParentTypes['AdminResult']> = {
  __resolveType: TypeResolveFn<'AdminBy' | 'AdminNotFound', ParentType, ContextType>;
};

export type AdminUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminUpdated'] = ResolversParentTypes['AdminUpdated']> = {
  entity?: Resolver<ResolversTypes['Admin'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminUpdatedResult'] = ResolversParentTypes['AdminUpdatedResult']> = {
  __resolveType: TypeResolveFn<'AdminNotFound' | 'AdminUpdated', ParentType, ContextType>;
};

export type AdminsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Admins'] = ResolversParentTypes['Admins']> = {
  entities?: Resolver<Array<ResolversTypes['Admin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AdminsResult'] = ResolversParentTypes['AdminsResult']> = {
  __resolveType: TypeResolveFn<'AdminNotFound' | 'Admins', ParentType, ContextType>;
};

export type AuthResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthError'] = ResolversParentTypes['AuthError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LoginResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Login'] = ResolversParentTypes['Login']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Login', ParentType, ContextType>;
};

export type LogoutResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Logout'] = ResolversParentTypes['Logout']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogoutResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LogoutResult'] = ResolversParentTypes['LogoutResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Logout', ParentType, ContextType>;
};

export type MessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  room?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageBy'] = ResolversParentTypes['MessageBy']> = {
  entity?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageCreatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageCreated'] = ResolversParentTypes['MessageCreated']> = {
  entity?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageCreatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageCreatedResult'] = ResolversParentTypes['MessageCreatedResult']> = {
  __resolveType: TypeResolveFn<'MessageCreated' | 'MessageNotFound', ParentType, ContextType>;
};

export type MessageNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageNotFound'] = ResolversParentTypes['MessageNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageRemovedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageRemoved'] = ResolversParentTypes['MessageRemoved']> = {
  entity?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageRemovedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageRemovedResult'] = ResolversParentTypes['MessageRemovedResult']> = {
  __resolveType: TypeResolveFn<'MessageNotFound' | 'MessageRemoved', ParentType, ContextType>;
};

export type MessageResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageResult'] = ResolversParentTypes['MessageResult']> = {
  __resolveType: TypeResolveFn<'MessageBy' | 'MessageNotFound', ParentType, ContextType>;
};

export type MessageUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageUpdated'] = ResolversParentTypes['MessageUpdated']> = {
  entity?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessageUpdatedResult'] = ResolversParentTypes['MessageUpdatedResult']> = {
  __resolveType: TypeResolveFn<'MessageNotFound' | 'MessageUpdated', ParentType, ContextType>;
};

export type MessagesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Messages'] = ResolversParentTypes['Messages']> = {
  entities?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagesResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MessagesResult'] = ResolversParentTypes['MessagesResult']> = {
  __resolveType: TypeResolveFn<'MessageNotFound' | 'Messages', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMessage?: Resolver<ResolversTypes['MessageCreatedResult'], ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'input'>>;
  createRoom?: Resolver<ResolversTypes['RoomCreatedResult'], ParentType, ContextType, RequireFields<MutationCreateRoomArgs, 'input'>>;
  deleteAdmin?: Resolver<ResolversTypes['AdminDeletedResult'], ParentType, ContextType, RequireFields<MutationDeleteAdminArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['UserDeletedResult'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  login?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['LogoutResult'], ParentType, ContextType>;
  refresh?: Resolver<ResolversTypes['RefreshResult'], ParentType, ContextType>;
  register?: Resolver<ResolversTypes['RegisterResult'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeMessage?: Resolver<ResolversTypes['MessageRemovedResult'], ParentType, ContextType, RequireFields<MutationRemoveMessageArgs, 'id'>>;
  removeRoom?: Resolver<ResolversTypes['RoomRemovedResult'], ParentType, ContextType, RequireFields<MutationRemoveRoomArgs, 'id'>>;
  updateAdmin?: Resolver<ResolversTypes['AdminUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateAdminArgs, 'id' | 'input'>>;
  updateMessage?: Resolver<ResolversTypes['MessageUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateMessageArgs, 'id' | 'input'>>;
  updateRoom?: Resolver<ResolversTypes['RoomUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateRoomArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['UserUpdatedResult'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAdminByField?: Resolver<ResolversTypes['AdminResult'], ParentType, ContextType, RequireFields<QueryGetAdminByFieldArgs, 'field' | 'value'>>;
  getAdminById?: Resolver<ResolversTypes['AdminResult'], ParentType, ContextType, RequireFields<QueryGetAdminByIdArgs, 'id'>>;
  getAllAdmins?: Resolver<ResolversTypes['AdminsResult'], ParentType, ContextType, Partial<QueryGetAllAdminsArgs>>;
  getAllMessages?: Resolver<ResolversTypes['MessagesResult'], ParentType, ContextType, Partial<QueryGetAllMessagesArgs>>;
  getAllRooms?: Resolver<ResolversTypes['RoomsResult'], ParentType, ContextType, Partial<QueryGetAllRoomsArgs>>;
  getAllUsers?: Resolver<ResolversTypes['UsersResult'], ParentType, ContextType, Partial<QueryGetAllUsersArgs>>;
  getMe?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType>;
  getMessageByField?: Resolver<ResolversTypes['MessageResult'], ParentType, ContextType, RequireFields<QueryGetMessageByFieldArgs, 'field' | 'value'>>;
  getMessageById?: Resolver<ResolversTypes['MessageResult'], ParentType, ContextType, RequireFields<QueryGetMessageByIdArgs, 'id'>>;
  getMessagesByRoom?: Resolver<ResolversTypes['MessagesResult'], ParentType, ContextType, RequireFields<QueryGetMessagesByRoomArgs, 'room'>>;
  getRoomByField?: Resolver<ResolversTypes['RoomResult'], ParentType, ContextType, RequireFields<QueryGetRoomByFieldArgs, 'field' | 'value'>>;
  getRoomById?: Resolver<ResolversTypes['RoomResult'], ParentType, ContextType, RequireFields<QueryGetRoomByIdArgs, 'id'>>;
  getUserByField?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryGetUserByFieldArgs, 'field' | 'value'>>;
  getUserById?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
};

export type RefreshResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Refresh'] = ResolversParentTypes['Refresh']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefreshResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RefreshResult'] = ResolversParentTypes['RefreshResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Refresh', ParentType, ContextType>;
};

export type RegisterResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Register'] = ResolversParentTypes['Register']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RegisterResult'] = ResolversParentTypes['RegisterResult']> = {
  __resolveType: TypeResolveFn<'AuthError' | 'Register', ParentType, ContextType>;
};

export type RoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  isPrivate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomBy'] = ResolversParentTypes['RoomBy']> = {
  entity?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomCreatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomCreated'] = ResolversParentTypes['RoomCreated']> = {
  entity?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomCreatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomCreatedResult'] = ResolversParentTypes['RoomCreatedResult']> = {
  __resolveType: TypeResolveFn<'RoomCreated' | 'RoomNotFound', ParentType, ContextType>;
};

export type RoomNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomNotFound'] = ResolversParentTypes['RoomNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomRemovedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomRemoved'] = ResolversParentTypes['RoomRemoved']> = {
  entity?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomRemovedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomRemovedResult'] = ResolversParentTypes['RoomRemovedResult']> = {
  __resolveType: TypeResolveFn<'RoomNotFound' | 'RoomRemoved', ParentType, ContextType>;
};

export type RoomResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomResult'] = ResolversParentTypes['RoomResult']> = {
  __resolveType: TypeResolveFn<'RoomBy' | 'RoomNotFound', ParentType, ContextType>;
};

export type RoomUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomUpdated'] = ResolversParentTypes['RoomUpdated']> = {
  entity?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomUpdatedResult'] = ResolversParentTypes['RoomUpdatedResult']> = {
  __resolveType: TypeResolveFn<'RoomNotFound' | 'RoomUpdated', ParentType, ContextType>;
};

export type RoomsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Rooms'] = ResolversParentTypes['Rooms']> = {
  entities?: Resolver<Array<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomsResult'] = ResolversParentTypes['RoomsResult']> = {
  __resolveType: TypeResolveFn<'RoomNotFound' | 'Rooms', ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserByResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserBy'] = ResolversParentTypes['UserBy']> = {
  entity?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeletedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserDeleted'] = ResolversParentTypes['UserDeleted']> = {
  entity?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeletedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserDeletedResult'] = ResolversParentTypes['UserDeletedResult']> = {
  __resolveType: TypeResolveFn<'UserDeleted' | 'UserNotFound', ParentType, ContextType>;
};

export type UserNotFoundResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserNotFound'] = ResolversParentTypes['UserNotFound']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']> = {
  __resolveType: TypeResolveFn<'UserBy' | 'UserNotFound', ParentType, ContextType>;
};

export type UserUpdatedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserUpdated'] = ResolversParentTypes['UserUpdated']> = {
  entity?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserUpdatedResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserUpdatedResult'] = ResolversParentTypes['UserUpdatedResult']> = {
  __resolveType: TypeResolveFn<'UserNotFound' | 'UserUpdated', ParentType, ContextType>;
};

export type UsersResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Users'] = ResolversParentTypes['Users']> = {
  entities?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UsersResult'] = ResolversParentTypes['UsersResult']> = {
  __resolveType: TypeResolveFn<'UserNotFound' | 'Users', ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Admin?: AdminResolvers<ContextType>;
  AdminBy?: AdminByResolvers<ContextType>;
  AdminDeleted?: AdminDeletedResolvers<ContextType>;
  AdminDeletedResult?: AdminDeletedResultResolvers<ContextType>;
  AdminNotFound?: AdminNotFoundResolvers<ContextType>;
  AdminResult?: AdminResultResolvers<ContextType>;
  AdminUpdated?: AdminUpdatedResolvers<ContextType>;
  AdminUpdatedResult?: AdminUpdatedResultResolvers<ContextType>;
  Admins?: AdminsResolvers<ContextType>;
  AdminsResult?: AdminsResultResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  AuthError?: AuthErrorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Login?: LoginResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Logout?: LogoutResolvers<ContextType>;
  LogoutResult?: LogoutResultResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageBy?: MessageByResolvers<ContextType>;
  MessageCreated?: MessageCreatedResolvers<ContextType>;
  MessageCreatedResult?: MessageCreatedResultResolvers<ContextType>;
  MessageNotFound?: MessageNotFoundResolvers<ContextType>;
  MessageRemoved?: MessageRemovedResolvers<ContextType>;
  MessageRemovedResult?: MessageRemovedResultResolvers<ContextType>;
  MessageResult?: MessageResultResolvers<ContextType>;
  MessageUpdated?: MessageUpdatedResolvers<ContextType>;
  MessageUpdatedResult?: MessageUpdatedResultResolvers<ContextType>;
  Messages?: MessagesResolvers<ContextType>;
  MessagesResult?: MessagesResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Refresh?: RefreshResolvers<ContextType>;
  RefreshResult?: RefreshResultResolvers<ContextType>;
  Register?: RegisterResolvers<ContextType>;
  RegisterResult?: RegisterResultResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  RoomBy?: RoomByResolvers<ContextType>;
  RoomCreated?: RoomCreatedResolvers<ContextType>;
  RoomCreatedResult?: RoomCreatedResultResolvers<ContextType>;
  RoomNotFound?: RoomNotFoundResolvers<ContextType>;
  RoomRemoved?: RoomRemovedResolvers<ContextType>;
  RoomRemovedResult?: RoomRemovedResultResolvers<ContextType>;
  RoomResult?: RoomResultResolvers<ContextType>;
  RoomUpdated?: RoomUpdatedResolvers<ContextType>;
  RoomUpdatedResult?: RoomUpdatedResultResolvers<ContextType>;
  Rooms?: RoomsResolvers<ContextType>;
  RoomsResult?: RoomsResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserBy?: UserByResolvers<ContextType>;
  UserDeleted?: UserDeletedResolvers<ContextType>;
  UserDeletedResult?: UserDeletedResultResolvers<ContextType>;
  UserNotFound?: UserNotFoundResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UserUpdated?: UserUpdatedResolvers<ContextType>;
  UserUpdatedResult?: UserUpdatedResultResolvers<ContextType>;
  Users?: UsersResolvers<ContextType>;
  UsersResult?: UsersResultResolvers<ContextType>;
};

