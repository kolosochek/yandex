const express = require('express')
const app = express()
const path = require('path');
const port = 3000

//static 
const static_url = path.join(__dirname, 'static')
app.use(express.static(static_url))

//app.get('/error/500.html', (request, response) => {
//  response.sendFile(path.join(__dirname, '/500.html'))
//})

app.listen(port, () => {
  console.log(`Express server has been started on port ${port}`)
})
