import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Types
  type Room {
    _id: ObjectId
    name: String!
    isPrivate: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }
  ## Room by id/field
  type RoomBy {
    entity: Room!
  }
  ## All Rooms
  type Rooms {
    entities: [Room!]!
  }
  ## Created Room
  type RoomCreated {
    entity: Room!
    message: String!
  }
  ## Updated Room
  type RoomUpdated {
    entity: Room!
    message: String!
  }
  ## Removed Room
  type RoomRemoved {
    entity: Room!
    message: String!
  }
  ## Not found
  type RoomNotFound {
    message: String!
  }

  # Inputs
  input RoomCreatedInput {
    name: String!
    isPrivate: Boolean
  }
  input RoomUpdatedInput {
    name: String!
  }

  # Unions
  union RoomResult = RoomBy | RoomNotFound
  union RoomsResult = Rooms | RoomNotFound
  union RoomCreatedResult = RoomCreated | RoomNotFound
  union RoomUpdatedResult = RoomUpdated | RoomNotFound
  union RoomRemovedResult = RoomRemoved | RoomNotFound

  # Queries
  type Query {
    getAllRooms(sort: SortInput, filter: FilterInput, paginate: PaginationInput): RoomsResult!
    getRoomById(id: ObjectId!): RoomResult!
    getRoomByField(field: String!, value: String!): RoomResult!
  }

  # Mutations
  type Mutation {
    createRoom(input: RoomCreatedInput!): RoomCreatedResult!
    updateRoom(id: ObjectId!, input: RoomUpdatedInput!): RoomUpdatedResult!
    removeRoom(id: ObjectId!): RoomRemovedResult!
  }
`;
