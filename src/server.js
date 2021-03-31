'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFoundHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');
const app = express();
const foodsRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v2/foods/', foodsRouter);
app.use('/api/v2/clothes/', clothesRouter);
app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || 3003;
        app.listen(PORT, () => {
            console.log('Server is running on port', PORT);
        });
    }
};

