const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const logger = require('morgan');
const cors = require('cors')

// init app with express
const app = express();
// connect database
connectDB();

app.use(cors()); //enable cors
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// home route
app.get('/', (req, res) => res.send('APP running'));

// Define routes
app.use('/api/todos', require('./routes/todos'));


const PORT = process.env.PORT || 80;
// testing commit
app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });