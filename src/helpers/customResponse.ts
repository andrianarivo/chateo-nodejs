import { Types } from 'mongoose';

// Custom responses for GraphQL resolvers to match the different returned types
export const customResponse = {
  auth: (typeName: any, generatedToken: string, returnedRole: Types.ObjectId | string, resultMessage: string) => ({
    __typename: typeName,
    token: generatedToken,
    role: returnedRole,
    message: resultMessage,
  }),
  entities: <T>(typeName: any, data: Array<T>, resultMessage = '') => ({
    __typename: typeName,
    entities: data,
    ...(resultMessage !== '' && { message: resultMessage }),
  }),
  entity: <T>(typeName: any, data: T) => ({
    __typename: typeName,
    entity: data,
  }),
  operation: (typeName: any, data: object, resultMessage: string) => ({
    __typename: typeName,
    entity: data,
    message: resultMessage,
  }),
  message: (typeName: any, resultMessage: string) => ({
    __typename: typeName,
    message: resultMessage,
  }),
};
