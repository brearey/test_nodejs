const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    const userAge = Number(req.query.age)
    // if (isNaN(userAge)) {
    //     process.exit(1) //This is an operational error: Invalid user input
    // }
    res.status(200).send({message: `This is API v.1, your double age is ${userAge * req.query.usernumber}`})
});

app.get('/', (req, res) => {
    res.end(`
        <h1>Test GitHub actions and Gitlab</h1>
    `)
})

app.get('*', (req, res) => {
    res.redirect('/');
})

module.exports = app