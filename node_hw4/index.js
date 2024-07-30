const express = require('express');

const app = express();

const users = [];

let uniqueID = 0;

app.get('/users', (req, res) => {
    res.send({users});
})

app.listen(3000);