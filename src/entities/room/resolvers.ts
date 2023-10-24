import * as resolver from '@services/crud.service';
import type {
  Resolvers,
  RoomResult,
  RoomsResult,
  RoomCreatedResult,
  RoomUpdatedResult,
  RoomRemovedResult,
} from '@generated/types';
import { RoomModel } from './model';
import { ErrorMessages, SuccessMessages } from './constants';
import { createRoomSchema, updateRoomSchema } from './validation';

export const resolvers: Resolvers = {
  Query: {
    getAllRooms: async (_parent, args): Promise<RoomsResult> =>
      resolver.getAll(RoomModel, args, ErrorMessages.ROOMS_NOT_FOUND, 'Rooms', 'RoomNotFound'),
    getRoomById: async (_parent, args): Promise<RoomResult> =>
      resolver.getById(RoomModel, args.id, ErrorMessages.ROOM_NOT_FOUND, 'RoomBy', 'RoomNotFound'),
    getRoomByField: async (_parent, args): Promise<RoomResult> =>
      resolver.getByField(RoomModel, args.field, args.value, ErrorMessages.ROOM_NOT_FOUND, 'RoomBy', 'RoomNotFound'),
  },

  Mutation: {
    createRoom: async (_parent, args): Promise<RoomCreatedResult> =>
      resolver.create(
        RoomModel,
        args.input,
        createRoomSchema,
        SuccessMessages.ROOM_CREATED,
        'RoomCreated',
        'RoomNotFound',
      ),
    updateRoom: async (_parent, args): Promise<RoomUpdatedResult> =>
      resolver.update(
        RoomModel,
        args.id,
        args.input,
        updateRoomSchema,
        SuccessMessages.ROOM_UPDATED,
        ErrorMessages.ROOM_NOT_FOUND,
        'RoomUpdated',
        'RoomNotFound',
      ),
    removeRoom: async (_parent, args): Promise<RoomRemovedResult> =>
      resolver.remove(
        RoomModel,
        args.id,
        SuccessMessages.ROOM_DELETED,
        ErrorMessages.ROOM_NOT_FOUND,
        'RoomRemoved',
        'RoomNotFound',
      ),
  },
};
