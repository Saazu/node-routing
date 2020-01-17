const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "public");
const userUploadPath = path.resolve(__dirname, "user_uploads");

//just like with any other middle function, if the url matches the public path,
//the file within that folder is served and no following route or middleware is
//function is called. If it isnt, userUploadPath is checked. 
app.use(express.static(publicPath));
app.use(express.static(userUploadPath));

app.listen(3000);