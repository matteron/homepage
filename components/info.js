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
		overflow-x: hidden;
		padding: 1em;
	}
	@media screen and (max-width: 414px) {
		:host {
			max-width: 325px;
			width: 325px;
			max-height: default;
		}
	}
	hr {
		margin: 20px -20px 20px;
		border: 1.5px solid;
	}
	.inner_text {
		margin: 0px 1.5em;
	}
	.header:before {
		content: "+ ";
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