// convert events into actions
const through = require('pull-through')
module.exports = through(function (data) {
  this.queue({
    type: 'contact',
    action: getAction(data.pathname)
  })
  function getAction(path) {
    if (path === '/') {
      return 'findAll'
    } else if (path === '/contacts/new') {
      return 'new'
    }
  }
})