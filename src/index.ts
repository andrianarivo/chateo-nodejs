import ip from 'ip'
import * as process from 'process'
import server from './server'
import log from './log'

function main() {
  const port = process.env.PORT || 4000
  server.listen(port, () => {
    if (process.platform === 'win32') {
      log(`Server is running  http://localhost:${port}/graphql`)
    } else if (process.platform === 'linux') {
      log(`Server is running  http://${ip.address()}:${port}/graphql`)
    }
  })
}

main()
