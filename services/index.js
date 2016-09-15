var pull = require('pull-stream/pull')

var db = PouchDB('contacts')
// load views here

var Store = require('./store')(db)
var Transform = require('./transform')
var Log = require('./log')

module.exports = pull(
  Transform,
  Store,
  Log
)