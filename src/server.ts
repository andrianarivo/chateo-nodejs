import { createYoga } from 'graphql-yoga'
import { useJWT } from '@graphql-yoga/plugin-jwt'
import { createServer } from 'http'
import { schema } from './schema'
import { createContext } from './context'

export const yoga = createYoga({
  schema,
  context: createContext,
  plugins: [
    useJWT({
      issuer: 'http://graphql-yoga.com',
      signingKey: process.env.JWT_SIGNING_KEY ?? '',
    }),
  ],
})

export default createServer(yoga)
