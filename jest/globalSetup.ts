import server from '../src/server'

export default async function globalSetup() {
  server.listen(4001)
}
