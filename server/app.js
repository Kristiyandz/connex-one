const express = require('express');
const promMid = require('express-prometheus-middleware');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { timeRouter } = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    authenticate: req => req.headers.authorization === 'mysecrettoken'
}));
app.use((req, res, next) => {
    if (req.headers.authorization !== 'mysecrettoken') {
        return res.status(403).json({ message: 'Not authorized' });
    }
    next();
});

app.use('/time', timeRouter);

module.exports = app;
