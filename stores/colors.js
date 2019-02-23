module.exports = select

function select() {
	const colors = [
        // Color Set 1 :0-3:
        ['#F6F7EB', '#E94F37'],
        ['#F6F7EB', '#3F88C5'],
        ['#F6F7EB', '#44BBA4'],
        ['#F6F7EB', '#393E41'],
        // Inverse Set 1 :4-7:
        ['#E94F37', '#F6F7EB'],
        ['#3F88C5', '#F6F7EB'],
        ['#44BBA4', '#F6F7EB'],
        ['#393E41', '#F6F7EB'],
    ]
    return colors[Math.floor(Math.random() * colors.length)];
}