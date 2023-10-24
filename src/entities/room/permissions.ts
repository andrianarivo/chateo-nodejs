import { is } from '@middlewares/rules';
import { or } from 'graphql-shield';

const permissions = {
  Query: {
    getAllRooms: is.Auth,
    getRoomById: is.Auth,
    getRoomByField: is.Auth,
  },
  Mutation: {
    createRoom: is.Auth,
    updateRoom: or(is.Own, is.Admin),
    removeRoom: or(is.Own, is.Admin),
  },
};

export default permissions;
