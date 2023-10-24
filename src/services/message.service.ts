import { Model, QueryOptions } from 'mongoose';
import { customResponse } from '@helpers';
import { ObjectSchema } from 'joi';
import { MessageModel } from '@entities/message/model';
import getPubSub from '@config/pubsub';
import { MessageCreatedInput } from '@generated/types';

const pubsub = getPubSub();

export const getAllByRoom = async <T>(
  EntityModel: Model<any>,
  options: QueryOptions,
  ErrorMessage: string,
  typeNameSuccess: string,
  typeNameError: string,
) => {
  type PaginationLimit = number | bigint | any;
  const page = (options.paginate && (options.paginate.page as PaginationLimit)) * 1 || 1;
  const limit = (options.paginate && (options.paginate.limit as PaginationLimit)) * 1 || 100;
  const skip = (page - 1) * limit;
  // Setup the query
  const foundEntities = await EntityModel.find({ room: options.room })
    .populate('author')
    .sort(options.sort && { [options.sort.field as string]: options.sort.order })
    .skip(skip)
    .limit(limit)
    .lean();
  if (foundEntities && Array.isArray(foundEntities) && foundEntities.length > 0)
    return customResponse.entities<T>(typeNameSuccess, foundEntities);
  return customResponse.message(typeNameError, ErrorMessage);
};

export const create = async (
  input: MessageCreatedInput,
  entitySchema: ObjectSchema,
  SuccessMessage: string,
  typeNameSuccess: string,
  typeNameError: string,
) => {
  const { error } = entitySchema.validate(input);
  if (error) return customResponse.message(typeNameError, error.message);
  const createdMessage = new MessageModel(input);
  await createdMessage.save();
  let newMessage = await MessageModel.findById(createdMessage._id).populate('author').lean();
  newMessage = newMessage || createdMessage;
  pubsub.publish('MESSAGE_CREATED', {
    messageCreated: customResponse.operation(typeNameSuccess, newMessage, SuccessMessage),
  });
  return customResponse.operation(typeNameSuccess, newMessage, SuccessMessage);
};
