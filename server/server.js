const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
require('dotenv').config()

const profile = require('./routes/api/profile')

const app = express()
const path = require('path')
var cors = require('cors')
var flash = require('express-flash')

const register_file = require('./routes/api/File')

// Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require('body-parser').text())

app.use('/api/uploads', express.static('uploads'))
app.use(flash())
// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)
app.use(cors())
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Credentials', 'true')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With'
	)
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
	next()
})

// Use Routes

app.use('/api/uploads', express.static('uploads'))

// Formulaire d'admission
app.use('/api/file', register_file)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
	//Set static folder
}

app.use(express.static('client/build'))
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'uploads'))
})
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
