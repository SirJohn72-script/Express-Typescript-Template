import { Server } from './src/app'

const server = new Server()
server.app.listen(server.getPort(), () => {
  console.log('>>> Server listening')
})