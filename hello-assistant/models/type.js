'use strict'
const db = require('../db');

module.exports = db.defineModel('type', {
    name: db.STRING(100)
});