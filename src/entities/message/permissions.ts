import { is } from '@middlewares/rules';
import { or } from 'graphql-shield';

const permissions = {
  Query: {
    getAllMessages: is.Auth,
    getMessageById: is.Auth,
    getMessageByField: is.Auth,
  },
  Mutation: {
    createMessage: is.Auth,
    updateMessage: or(is.Own, is.Admin),
    removeMessage: or(is.Own, is.Admin),
  },
};

export default permissions;
