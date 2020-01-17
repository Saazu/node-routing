const express = require('express')
const app = express()

app.get("/oliver", function(request, response) {
  response.send("Welcome, since you want more!")
})

app.use(function(request, response) {
  response.status(404).send("Artful Dodger was here")
})

app.listen(3000);