var css = require('sheetify')
var choo = require('choo')
var main = require('./views/main')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(require('./stores/reveal'))

app.route('/', main)
app.route('/*', main)

module.exports = app.mount('body')
