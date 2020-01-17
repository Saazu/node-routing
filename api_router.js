//Rather can require express and then get the router
//simply 
const api = require('express').Router();

//middleware function that performs some action on the 
//request or response object
api.use(function(request, response) {
  /** */
})

api.get("/message", function(req, res) {
  /** */
})

module.exports = api