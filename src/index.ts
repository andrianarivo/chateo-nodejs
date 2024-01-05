import server from './server'

function main() {
  server.listen(4000, () => {
    console.info(`Server is running on http://172.19.0.3:4000/graphql`)
  })
}

main()
