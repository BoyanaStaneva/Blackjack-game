let cardOne = "Ace of Spades"

let cardTwo = "Three of Clubs"

let suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

let cards = ["Ace", "King", "Queen", "Jack",

  "Two", "Three","Four","Five", "Six","Seven", "Eight", "Nine", "Ten"]

let myDeck = [];

  for (suitsIndx = 0; suitsIndx < suits.length; suitsIndx++) {
    for (cardsIndx = 0; cardsIndx < cards.length; cardsIndx++) {
      myDeck.push(cards[cardsIndx] + " of " + suits[suitsIndx])
    }
  }

  for (let i=0; i < myDeck.length; i++) {
    console.log(myDeck[i])
  }

document.getElementById('playerHand').innerHTML = `<p>Player drew ${myDeck[4]}</p>`;

document.getElementById('dealerHand').innerHTML = `<p>Dealer drew ${myDeck[23]}</p>`;
