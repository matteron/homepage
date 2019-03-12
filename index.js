var css = require('sheetify')
var choo = require('choo')
var main = require('./views/main')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/reveal'))

app.route('/', main)
app.route('*', main)

module.exports = app.mount('body')
