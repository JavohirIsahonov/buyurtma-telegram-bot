const express = require('express');
require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const errorHandle = require('./middlewares/error')
const app = express();

app.use(cors());
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public/uploads')));

connectDB();

// Routes
app.use('/api/user', require('./router/user.router'));
app.use('/api/project', require('./router/project.router'));

app.use(errorHandle)

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if(err){
        console.log(`Xatolik serverga ${err}`.bgRed);
    }
    console.log(`Server ${PORT} portda ishga tushdi`.bgGreen);
});