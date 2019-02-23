const html = require('choo/html')
const css = require('sheetify')
const colors = require('../stores/colors')
const frame = require('../components/frame')
const info = require('../components/info')

const [fg, bg] = colors();

const prefix = css`
	:host {
		max-width: 603px;
		margin: auto;
		margin-top: 10%;
	}
	@media screen and (max-width: 414px) {
		:host {
			max-width: 325px;

		}
	}
`
const title = 'mattia'

module.exports = view
function view(state, emit) {
	if (state.title !== title){emit('DOMTitleChange', title)}

	function determine(){
		if(state.showing){
			return info(state.showing)
		}
	}

	return html`
		<body
			class="helvetica ${prefix}"
			style="color:${fg}; background-color:${bg};"
		>
			${frame(state, emit)}
			${determine()}
		</body>
	`
}