const app = require('palmetto')
const components = require('./components')
const services = require('./services')
const { a } = require('palmetto/common-selectors')


app({
  selectors: app.selectors(a),
  services,
  components
})

