const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const API_PORT = 3030;
const port = 3030 || API_PORT;

server.listen(port, () => {
    console.log("Server is running on port " + port)
})