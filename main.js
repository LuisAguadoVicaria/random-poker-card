const getColor = (cardcode) => {
	switch(Math.floor(Math.random() * 4) + 1) { // 1-4 rand
		case 1:
			return [cardcode, "black", "&spades;"]
		case 2:
			return [cardcode, "black", "&clubs;"]
		case 3:
			return [cardcode, "red", "&diams;"]
		case 4:
			return [cardcode, "red", "&hearts;"]
	}
}

const getCard = () => {
	let num = Math.floor(Math.random() * 13) + 1 // 1-13 rand
	switch(num) {
		case 1:
			return getColor("A")
		case 11:
			return getColor("J")
		case 12:
			return getColor("Q")
		case 13:
			return getColor("K")
		default:
			return getColor(num)
	}
}

const loadCard = () => {
	let card = getCard()
	document.querySelector("figcaption").innerHTML = card[0]
	Array.from(document.querySelectorAll("aside")).forEach((item) => {
		item.style.color = card[1]
		item.innerHTML = card[2]
	})
}

const handleInput = (event) => {
	let input = parseInt(event.target.value)
	isNaN(input) ? event.target.value = "Error Input" : document.querySelector("article").style.width = input + 'px'
}

window.addEventListener("load", loadCard)
document.querySelector("button").addEventListener("click", loadCard)
document.querySelector("figure").addEventListener("click", loadCard)
document.querySelector("input").addEventListener("keyup", handleInput)