
console.log("Up and running!");



alert("hi");

const cards = ["queen","queen","queen","king"];

const cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped queen");

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped king");

if (cardsInPlay.length===2){

	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!")
	} else {}
};

