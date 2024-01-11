import ip from 'ip'
import * as process from 'process'
import server from './server'
import log from './log'

function main() {
  server.listen(4000, () => {
    if (process.platform === 'win32') {
      log(`Server is running  http://localhost:4000/graphql`)
    } else if (process.platform === 'linux') {
      log(`Server is running  http://${ip.address()}:4000/graphql`)
    }
  })
}

main()
