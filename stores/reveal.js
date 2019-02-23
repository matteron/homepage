module.exports = reveal
function reveal(state, emitter) {
	state.showing = 0;

	emitter.on('DOMContentLoaded', function () {
    emitter.on('reveal', function (flag) {
      state.showing = (state.showing === flag) ? 0 : flag
      emitter.emit(state.events.RENDER)
    })
  })
}