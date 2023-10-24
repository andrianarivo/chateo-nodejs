import { Schema, model } from 'mongoose';

import type { RoomEntity } from './interface';

const RoomSchema = new Schema<RoomEntity>(
  {
    name: {
      type: String,
      isRequired: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const RoomModel = model<RoomEntity>('Room', RoomSchema);
