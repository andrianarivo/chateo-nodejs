import server from '../src/server'

export default async function globalTeardown() {
  server.close()
}
