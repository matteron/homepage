const html = require('choo/html')
const css = require('sheetify')
const namebox = require('./namebox')
const linkbox = require('./linkbox')

const prefix = css`
	:host {
		display: flex;
	}
	@media screen and (max-width: 414px) {
		:host {
			flex-direction: column;
		}
	}
`
module.exports = frame

function frame(state, emit) {
	return html`
		<div class=${prefix}>
			${namebox()}
			${linkbox(state, emit)}
		</div>
	`
}