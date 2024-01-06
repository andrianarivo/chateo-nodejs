import server from '../src/server'
import debug from '../src/debug'

export default async function globalSetup() {
  server.listen(4001, () => {
    debug('Test server running')
  })
}
