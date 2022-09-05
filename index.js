const express = require('express');
const userRouter = require('./routes/user.router');

const PORT = process.env.PORT || 80;

const app = express();
app.use(express.json());

app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.end(`
        <h1>Home page</h1>
        <ul>
            <li><a href="api/user">Get all users</a></li>
            <li><a href="api/user/1">Get 1 user</a></li>
            <li><a href="api/user/2">Get 2 user</a></li>
            <li><a href="api/user/3">Get 3 user</a></li>
        </ul>
    `);
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));