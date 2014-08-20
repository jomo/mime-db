/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = require('./db.json')

Object.defineProperty(module.exports, 'extension', {
  value: require('./db-ext.json')
})
