const cors = require('cors');
const express = require('express');
const axios = require('axios');
const router = require('../routes/router')

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);

module.exports = server;