const express = require('express')
const app = express()

app.get('/',(Request,Response)=>Response.send('hello word'))
app.get('/about', function (req, res) {
    res.send('Hello World about!')
  })
app.listen(3000,() => console.log('example app listening on part 3000!'))