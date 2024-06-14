
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db.js');
const {readdirSync} = require('fs')
// const routers = require('./routers/routers.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use the routers
// app.use('/api', routers);

const PORT = process.env.PORT || 3000;
readdirSync('./routers').map((route) => app.use('/api', require('./routers/' + route)))

const server = () => {
    db().then(() => {
        app.listen(PORT, () => {
            console.log("Listening on port", PORT);
        });
    }).catch(err => {
        console.error("Failed to connect to the database", err);
    });
};

server();