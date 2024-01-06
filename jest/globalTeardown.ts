import server from '../src/server'
import debug from '../src/debug'

export default async function globalTeardown() {
  server.close(() => {
    debug('Test server closed')
  })
}
