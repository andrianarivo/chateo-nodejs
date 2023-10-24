import Joi from 'joi';

export const createMessageSchema = Joi.object({
  content: Joi.string().required(),
  author: Joi.string().required(),
  room: Joi.string().required(),
});

export const updateMessageSchema = Joi.object({
  content: Joi.string(),
});
