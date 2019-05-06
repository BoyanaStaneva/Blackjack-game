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
      myDeck.push(cards[cardsIndx] + " of " + suits[suitsIndx])
    }
  }
  return myDeck
}

let myDeck = createDeck();

function getCard() {
  return Math.floor((Math.random() * 51) + 1);
}


//adjusting inner html to display the card for the player
document.getElementById('playerHand').innerHTML = `<p>Player drew ${myDeck[getCard()]}</p>`;

document.getElementById('dealerHand').innerHTML = `<p>Dealer drew ${myDeck[getCard()]}</p>`;
