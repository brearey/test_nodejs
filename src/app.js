const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).send({message: "This is API v.1"})
});

app.get('/', (req, res) => {
    res.end(`
        <h1>Test GitHub actions and Gitlab</h1>
    `)
})

module.exports = app