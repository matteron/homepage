const html = require('choo/html')
const css = require('sheetify')

const about = require('./about')
const tono = require('./tono')

const prefix = css`
	:host {
		border: solid 3px;
		border-top: 0px;
		width: 603px;
		max-width: 603px;
		max-height: 400px;
		overflow-y: auto;
		padding: 1em;
	}
`

module.exports = info
function info(showing) {
	function determine(){
		return (showing===1) ? about() : tono()
	}
	return html`
		<div class=${prefix}>
			${determine()}
		</div>
	`
}