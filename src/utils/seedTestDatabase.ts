import { User } from '@prisma/client'
import db from '../db'

// eslint-disable-next-line import/no-mutable-exports
let userOne: User
// eslint-disable-next-line import/no-mutable-exports
let userTwo: User

const setupDatabase = async () => {
  userOne = await db.user.create({
    data: {
      name: 'Test User',
      email: 'test.user@mail.test',
    },
  })
  userTwo = await db.user.create({
    data: {
      name: 'Test User 2',
      email: 'test.user2@mail.test',
    },
  })
}

const tearDownDatabase = async () => {
  await db.user.deleteMany({
    where: {
      OR: [{ id: userOne.id }, { id: userTwo.id }],
    },
  })
}

export { setupDatabase, tearDownDatabase, userOne, userTwo }
