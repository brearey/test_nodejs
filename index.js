const express = require('express');

const PORT = process.env.PORT || 80;
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

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`))