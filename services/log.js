const through = require('pull-through')
module.exports = through(function (data) {
  console.log(data)
  this.queue(data)
})