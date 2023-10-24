import * as resolver from '@services/crud.service';
import * as authResolver from '@services/auth.service';
import type { Resolvers, UserResult, UsersResult, UserUpdatedResult, UserDeletedResult } from '@generated/types';
import type { AuthData } from '@entities/auth/interface';
import { customResponse } from '@helpers';
import { UserModel } from './model';
import { ErrorMessages, SuccessMessages } from './constants';
import { userSchema } from './validation';

export const resolvers: Resolvers = {
  Query: {
    getAllUsers: async (_parent, args): Promise<UsersResult> =>
      resolver.getAll(UserModel, args, ErrorMessages.USERS_NOT_FOUND, 'Users', 'UserNotFound'),
    getUserById: async (_parent, args): Promise<UserResult> =>
      resolver.getById(UserModel, args.id, ErrorMessages.USER_NOT_FOUND, 'UserBy', 'UserNotFound'),
    getUserByField: async (_parent, args): Promise<UserResult> =>
      resolver.getByField(UserModel, args.field, args.value, ErrorMessages.USER_NOT_FOUND, 'UserBy', 'UserNotFound'),
    getMe: async (_parent, _, context): Promise<any> => {
      const foundUser = await authResolver.findMe(context.req);
      if (foundUser) return customResponse.entity('UserBy', foundUser);
      return customResponse.message('UserNotFound', ErrorMessages.USER_NOT_FOUND);
    },
  },

  Mutation: {
    updateUser: async (_parent, args): Promise<UserUpdatedResult> =>
      resolver.update(
        UserModel,
        args.id,
        args.input,
        userSchema,
        SuccessMessages.USER_UPDATED,
        ErrorMessages.USER_NOT_FOUND,
        'UserUpdated',
        'UserNotFound',
      ),
    deleteUser: async (_parent, args): Promise<UserDeletedResult> =>
      resolver.remove(
        UserModel,
        args.id,
        SuccessMessages.USER_DELETED,
        ErrorMessages.USER_NOT_FOUND,
        'UserDeleted',
        'UserNotFound',
      ),
  },

  User: {
    role: async ({ role }, _args, { dataloader }): Promise<AuthData> => dataloader.auth.load(role),
  },
};
