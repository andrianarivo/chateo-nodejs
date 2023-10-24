import { Schema, model } from 'mongoose';

import type { MessageEntity } from './interface';

const MessageSchema = new Schema<MessageEntity>(
  {
    content: {
      type: String,
      isRequired: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    room: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Room',
    },
  },
  { timestamps: true },
);

export const MessageModel = model<MessageEntity>('Message', MessageSchema);
