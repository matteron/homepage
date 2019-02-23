const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
	:host {
		border: solid 3px;
		max-width: 325px;
		max-height: 88px;
		width: 325px;
    	height: 88px;
	}
	.title {
		font-size: 40px;
	    line-height: 48px;
	    text-align: center;
	    margin-top: 10px;
	}
	.kanji {
		font-size: 16px;
    	line-height: 16px;
    	margin-top: -62px;
    	text-align: center;
    	display: flex;
    	justify-content: space-evenly;
	}
	.copy {
		font-size: 8px;
    	line-height: 12px;
    	position: relative;
    	left: 290px;
    	top: -90px;
	}
`
module.exports = namebox
function namebox() {
	return html`
		<div class=${prefix}>
			<p class="title fw5">Mattia Schiano</p>
			<div class="kanji">
				<p>スキアーノ</p>
				<p>マッテぃア</p>
			</div>
			<p class="copy">© ${new Date().getFullYear()}</p>
		</div>
	`
}