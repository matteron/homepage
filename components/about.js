const html = require('choo/html')
module.exports = about

const aboutme = () => { return html`
	<p>Heya, as you can tell from above, I'm Mattia.</p>
	<p>I studied computer science and am currently putzing about somewhere.</p>
	<p>I speak English, Italian, and am [very] slowly learning Japanese.</p>
	<p>It feels weird to talk about myself, so I'm going to stop now.</p>
`}
const aboutpage = () => { return html`
	<p>This is a tiny site made using <a href="https://choo.io">Choo</a> to display my work.</p>
	<p>
	The site itself is an experiment in colorful minimalism.
	I've been noticing that any sort of minimalistic website
	tends to use a monochromatic color scheme.  I wanted to
	try and incorporate colors back into a clean design.
	</p>

	<p>
	The whole gimmick of the site is that the color scheme
	is picked randomly when the page loads.
	</p>

	<p>
	There's about 8 total colorschemes, so go ahead and 
		<u
			onclick=${() =>{location.reload()}}
			style="cursor: pointer"
		>
		reload.
		</u>
	</p>

	<p>Whether or not this design is a success is really up to you though.</p>
`}

function about(){
	return html`
		<p class="f3 mt0 mb0 header">me</p>
		<div class="inner_text f5">
			${aboutme()}
		</div>
		<hr/>
		<p class="f3 mt0 mb0 header">page</p>
		<div class="inner_text f5 lh-copy">
			${aboutpage()}
		</div>
	`
}