// creating array with all the suits
let suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
//creating array with all the cards
let cards = ["Ace", "King", "Queen", "Jack","Two", "Three","Four","Five", "Six","Seven", "Eight", "Nine", "Ten"]
//creating empty array for the card values and create a deck

function createDeck () {
  let myDeck = [];
//looping through each item from the suits
  for (suitsIndx = 0; suitsIndx < suits.length; suitsIndx++) {
    //looping through each item from the card values
    for (cardsIndx = 0; cardsIndx < cards.length; cardsIndx++) {
      //pushing the combinations into a the deck array
      let card = {
        suit: suits[suitsIndx],
        value: cards[cardsIndx],
        name: cards[cardsIndx] + ' of ' + suits[suitsIndx],
        points: 5
      }
      if (card.value == "Two") {
        card.points = 2}
      if (card.value == "Three") {
          card.points = 3}
      if (card.value == "Four") {
          card.points = 4}
      if (card.value == "Five") {
          card.points = 5}
      if (card.value == "Six") {
          card.points = 6}
      if (card.value == "Seven") {
          card.points = 7}
      if (card.value == "Eight") {
          card.points = 8}
      if (card.value == "Nine") {
          card.points = 9 }
      if (card.value == "Ten" || card.value == "Jack") {
          card.points = 10}
      if (card.value == "Queen" || card.value == "King") {
          card.points = 10}
      if (card.value == "Ace") {
          card.points = 10}
    myDeck.push(card)

    }

  }
  return myDeck

}



let makeDeck = createDeck();
console.log(makeDeck);

function getCard() {
  return Math.floor((Math.random() * 51) + 1);
}

let playerDraw = makeDeck[getCard()]
let dealerDraw = makeDeck[getCard()]

//adjusting inner html to display the card for the player
document.getElementById('playerHand').innerHTML = `<p>Player drew ${playerDraw.name}</p> <p>Player score is ${playerDraw.points}</p>`;

document.getElementById('dealerHand').innerHTML = `<p>Dealer drew ${dealerDraw.name}</p> <p>Player score is ${dealerDraw.points}</p>`;
