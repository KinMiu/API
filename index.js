const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
require('dotenv/config')

app.use(express.json({ extended: true, limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.use(
  bodyParser.json({
    extended: true,
    limit: '50mb',
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  })
);

mongoose.connect(process.env.DB_URL)
let db = mongoose.connection

db.on('err', console.log.bind(console, 'Database connect error'))
db.once('open', () => {
	console.log('database Connected')
})

// routes
app.get('/', (req, res) => {
	res.end('testing')
})

app.use(cors())
app.use('/user', require('./routes/user'))

app.listen(process.env.PORT, () => {
	console.log(`Server run on port ${process.env.PORT}`)
})