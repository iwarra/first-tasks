let imgDiv = document.querySelector('.imageDiv');
let btn = document.querySelector('.btn');
let resultText = document.querySelector('.result-text');
let result = 0;

function stylingButton() {
  let btnText = document.querySelector('.btn-text');
  btnText.classList.add('after')
}

async function getDeck(nrOfDecks) {
  let deck = await fetch ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=' + nrOfDecks);
  let deckJson = await deck.json();
  deckID = deckJson.deck_id;
  console.log(deckID)
  return deckID
}

async function getCardJson() {
  let deckID = await getDeck(1);
  let card = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
  let cardJSON = await card.json();
  return cardJSON
}


async function currentCard() {

  let cardJson = await getCardJson();

function showCards() {
  let img = document.createElement('img');
  img.classList.add('image');
  let cardImgURL = cardJson.cards.at(0).image;
  img.setAttribute('src', cardImgURL);
  imgDiv.appendChild(img)

  stylingButton();
}

function showCardValue() {
  let cardValue = cardJson.cards[0].value;

  switch (true) {
    case cardValue > 1 && cardValue <= 10:
    cardValue = cardValue;
    break;
    case cardValue == 'JACK':
    case cardValue == 'KING':
    case cardValue == 'QUEEN':
    cardValue = 10;
    break;
    case cardValue == 'ACE':
    result > 12 ? cardValue = 1 : cardValue = 11;
    default:
      console.log('Chose your card.')
  }

  result = result + +cardValue;
  resultText.innerHTML = 'Your result is: ' + result;
  return result;
}

function loseOrWin() {
  if (result == 21) alert('Congrats, you won!');
  //if (result )
}

showCards();
showCardValue()
}


btn.addEventListener('click', () => { 
  currentCard()
})