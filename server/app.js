const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const phonesRoutes = require('./api/phones');

// Config of server
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({exdended: false}));
app.use(bodyParser.json());

// Routes witch should handle requests
app.use('/phones', phonesRoutes);

app.use((req, res, next)=> {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    });
});

module.exports = app;