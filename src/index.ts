import server from './server'
import debug from './debug'

function main() {
  server.listen(4000, () => {
    debug(`Server is running on http://172.19.0.3:4000/graphql`)
  })
}

main()
