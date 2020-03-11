// Libraries
const http = require('http');
const path = require('path');
const express = require('express');

// Config
const PORT = process.env.PORT || 100;
const app = express();

const server = http.createServer(app);

app.use(express.static(__dirname + '/client/build'))

app.get('/', (req, res) => {
    res.send('Đây là trang chủ')
})

server.listen(PORT,() => {
    console.log('App is listening as port: ', PORT)
})