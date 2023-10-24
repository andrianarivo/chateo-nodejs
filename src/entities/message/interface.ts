import { UserEntity } from '@entities/user/interface';

export interface MessageEntity {
  _id: string;
  content: string;
  author: UserEntity;
  room: string;
}
