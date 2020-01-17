const express = require('express')
const path = require('path')

//router subapplication
const apiRouter = require('./api_router')

const app = express()

const staticPath = path.resolve(__dirname, "static")
app.use(express.static(staticPath))

//router mini application used as a call for a middleware function
//that routes all /api requests to the apiRouter [function | middleware]
app.use("/api", apiRouter)

app.listen(3000)