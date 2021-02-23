require('dotenv').config()
require('./src/database/db').db()

const {config} = require('./config')
const app = require('./app')

const PORT = config.PORT

app.listen(PORT, ()=> {
  console.log(`Server up and running on http://localhost:${PORT}/api/v1/users`)
})