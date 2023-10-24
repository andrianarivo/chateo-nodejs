import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Types
  type Message {
    _id: ObjectId
    # Add your fields here #
    content: String!
    author: ObjectId!
    room: ObjectId!
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Message by id/field
  type MessageBy {
    entity: Message!
  }
  ## All Messages
  type Messages {
    entities: [Message!]!
  }
  ## Created Message
  type MessageCreated {
    entity: Message!
    message: String!
  }
  ## Updated Message
  type MessageUpdated {
    entity: Message!
    message: String!
  }
  ## Removed Message
  type MessageRemoved {
    entity: Message!
    message: String!
  }
  ## Not found
  type MessageNotFound {
    message: String!
  }

  # Inputs
  input MessageCreatedInput {
    # Add your fields here #
    content: String!
    author: ObjectId!
    room: ObjectId!
  }
  input MessageUpdatedInput {
    # Add your fields here #
    content: String!
  }

  # Unions
  union MessageResult = MessageBy | MessageNotFound
  union MessagesResult = Messages | MessageNotFound
  union MessageCreatedResult = MessageCreated | MessageNotFound
  union MessageUpdatedResult = MessageUpdated | MessageNotFound
  union MessageRemovedResult = MessageRemoved | MessageNotFound

  # Queries
  type Query {
    getAllMessages(sort: SortInput, filter: FilterInput, paginate: PaginationInput): MessagesResult!
    getMessageById(id: ObjectId!): MessageResult!
    getMessageByField(field: String!, value: String!): MessageResult!
    getMessagesByRoom(sort: SortInput, room: ObjectId!, filter: FilterInput, paginate: PaginationInput): MessagesResult!
  }

  # Mutations
  type Mutation {
    createMessage(input: MessageCreatedInput!): MessageCreatedResult!
    updateMessage(id: ObjectId!, input: MessageUpdatedInput!): MessageUpdatedResult!
    removeMessage(id: ObjectId!): MessageRemovedResult!
  }
`;
