'use strict';
const path = require('path');

module.exports = {
    entry: {
        bundle: __dirname + '/app/build/main'
    },
    output: {
        path: path.resolve(__dirname + '/app'),
        filename: 'bundle.js'
    },
    watch: true
};