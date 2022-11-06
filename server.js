const express = require('express')
const server = express()
const path = require('path');
const port = 3000

//static 
const static_url = path.join(__dirname, 'static')
server.use(express.static(static_url))

server.listen(port, () => {
  console.log(`Express server has been started on port ${port}`)
})
