import Joi from 'joi';

export const createRoomSchema = Joi.object({
  name: Joi.string().required(),
  isPrivate: Joi.boolean().default(false),
});

export const updateRoomSchema = Joi.object({
  name: Joi.string(),
});
