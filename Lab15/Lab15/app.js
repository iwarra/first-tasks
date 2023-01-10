const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('server running on port: ' + PORT))