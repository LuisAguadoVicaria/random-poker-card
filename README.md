<h1 align="center">Random Poker Card</h1>

<p align="center" >
  Example of random card generator manipulating the DOM and using pure JS and CSS
</p>
<p align="center" >
  <a href="https://luisaguadovicaria.github.io/random-poker-card/">
    <img height="44px"  src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/live-demo-button.png" alt="live-demo" align="center">
  </a>
</p>

<p align="center">
  <img height="444px" src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/random-poker-card.png" alt="front-image" align="center">
</p>

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/alexandresanlim/Badges4-README.md-Profile)[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()

</div>

<br>

## Featured

<br>

> <h5>Generate random card on:</h5>
>   <li><sub>First load</sub></li>
>   <li><sub>Cick New button</sub></li>
>   <li><sub>Click the card itself</sub></li>

<br>

> <h5>Change card PX width:</h5>
>   <li><sub>Input amount</sub></li>
>   <li><sub>On key up check</sub></li>
>   <li><sub>Change its PX value or return error</sub></li>

<br>

> <h5>Good practices:</h5>
>   <li><sub>Load JS before the end of body</sub></li>
>   <li><sub>Listeners instead of HTML onClick tags</sub></li>
>   <li><sub>QuerySelector preferred, rest are deprecated</sub></li>
>   <li><sub>SEO semantic tags</sub></li>
>   <li><sub>Clean and readable code</sub></li>
<br>

```js
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
```

## Deployment

- Download this repo and open `index.html` with your browser, simple!
 
<sub><sub>Alternatively you can open any GitHub repository in Gitpod</sub></sub> 
  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuisAguadoVicaria/random-poker-card/)

## Contact

  <sub>Feel free to leave me a message, I'm friendly!</sub>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-aguado-vicar%C3%ADa-546b33241/)
