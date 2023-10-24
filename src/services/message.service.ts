import { Model, QueryOptions } from 'mongoose';
import { customResponse } from '@helpers';

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
