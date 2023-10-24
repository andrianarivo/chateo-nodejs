import * as resolver from '@services/crud.service';
import * as messageResolver from '@services/message.service';
import type {
  Resolvers,
  MessageResult,
  MessagesResult,
  MessageCreatedResult,
  MessageUpdatedResult,
  MessageRemovedResult,
} from '@generated/types';
import { MessageModel } from './model';
import { ErrorMessages, SuccessMessages } from './constants';
import { createMessageSchema, updateMessageSchema } from './validation';

export const resolvers: Resolvers = {
  Query: {
    getAllMessages: async (_parent, args): Promise<MessagesResult> =>
      resolver.getAll(MessageModel, args, ErrorMessages.MESSAGES_NOT_FOUND, 'Messages', 'MessageNotFound'),
    getMessageById: async (_parent, args): Promise<MessageResult> =>
      resolver.getById(MessageModel, args.id, ErrorMessages.MESSAGE_NOT_FOUND, 'MessageBy', 'MessageNotFound'),
    getMessageByField: async (_parent, args): Promise<MessageResult> =>
      resolver.getByField(
        MessageModel,
        args.field,
        args.value,
        ErrorMessages.MESSAGE_NOT_FOUND,
        'MessageBy',
        'MessageNotFound',
      ),
    getMessagesByRoom: async (_parent, args): Promise<MessagesResult> =>
      messageResolver.getAllByRoom(MessageModel, args, ErrorMessages.MESSAGES_NOT_FOUND, 'Messages', 'MessageNotFound'),
  },

  Mutation: {
    createMessage: async (_parent, args): Promise<MessageCreatedResult> =>
      resolver.create(
        MessageModel,
        args.input,
        createMessageSchema,
        SuccessMessages.MESSAGE_CREATED,
        'MessageCreated',
        'MessageNotFound',
      ),
    updateMessage: async (_parent, args): Promise<MessageUpdatedResult> =>
      resolver.update(
        MessageModel,
        args.id,
        args.input,
        updateMessageSchema,
        SuccessMessages.MESSAGE_UPDATED,
        ErrorMessages.MESSAGE_NOT_FOUND,
        'MessageUpdated',
        'MessageNotFound',
      ),
    removeMessage: async (_parent, args): Promise<MessageRemovedResult> =>
      resolver.remove(
        MessageModel,
        args.id,
        SuccessMessages.MESSAGE_DELETED,
        ErrorMessages.MESSAGE_NOT_FOUND,
        'MessageRemoved',
        'MessageNotFound',
      ),
  },
};
