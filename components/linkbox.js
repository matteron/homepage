const html = require('choo/html')
const css = require('sheetify')
const git = require('./git')
const twit = require('./twit')

const prefix = css`
	:host {
		border: 3px solid;
		border-left: 0px;
		max-width: 278px;
		max-height: 88px;
		width: 278px;
    	height: 88px;
	}
	@media screen and (max-width: 414px) {
		:host {
			border-top: 0px;
			border-left: 3px solid;
			max-width: 325px;
			width: 325px;
		}
	}
	.nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		max-height: 44px;
    	height: 44px;
    	margin-top: -4px;
	}
	.con {
		border-bottom: solid 3px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		max-height: 44px;
		height: 44px;
		padding-right: 40px;
	}
	.t {
		cursor: pointer;
		font-size: 26px;
	}
	.u {
		text-decoration: line-through;
	}
	.t_content {
		outline: none;
	}
	a {
		color: currentColor;
	}
`

module.exports = linkbox
function linkbox(state, emit){

	function click(flag){
		emit('reveal', flag)
	}
	function enter(key, flag){
		if(key.code === 'Enter'){
			click(flag)
		}
	}


	return html`
		<div class=${prefix}>
			<div class="con">
				<a href="https://github.com/matteron">
					${git()}
				</a>
				<a href="https://twitter.com/mattiaschiano_">
					${twit()}
				</a>
			</div>
			<div class="nav">
				<p
					onclick=${() => {click(1)}}
					onkeydown=${(e) => {enter(e,1)}}
					class="t ${state.showing===1?'u':''}"
					tabindex="0"
				>
					<span class="t_content" tabindex="-1">
        				about
    				</span>
				</p>
				<p
					onclick=${() => {click(2)}}
					onkeydown=${(e) => {enter(e,2)}}
					class="t ${state.showing===2?'u':''}"
					tabindex="0"
				>
					<span class="t_content" tabindex="-1">
        				tono
    				</span>
				</p>
			</div>
		</div>
	`
}