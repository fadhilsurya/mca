if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 3000;
const {
    errorHandler
} = require('./middlewares/errorHandler')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/glory_fox_live_code_1', {
    useNewUrlParser: true
});

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

const routes = require('./routes/index-route')

app.use('/', routes)

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port port`))