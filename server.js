const express = require('express')
const hbs = require('handlebars')
const app = express()
const path = require('path');
const port = 3000

//static 
const static_url = path.join(__dirname, 'static')
app.use(express.static(static_url))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Express server has been started on port ${port}`)
})
