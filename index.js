require('dotenv').config()
const app = require('./src/app')
const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`SERVER STARTED ON MODE ${app.get('env')} AND ON THE PORT: ${PORT}`))

// да ладно это я зашел через браузер Chrome на слабом ноуте Aquarius через vscode.dev