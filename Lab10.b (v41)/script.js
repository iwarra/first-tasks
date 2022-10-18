let imgDiv = document.querySelector('.imageDiv');
let btn = document.querySelector('.btn');
let resultText = document.querySelector('.result-text');
let computersResultText = document.querySelector('.computer-result-text');
let playAgainBtn = document.querySelector('.play-again-btn');
let stopBtn = document.querySelector('.stop-btn');
let result = 0;
let computersResult = 0;
let deckID = '';

function stylingButton() {
  let btnText = document.querySelector('.btn-text');
  btnText.classList.add('after')
}


async function getDeck(nrOfDecks) {
  let deck = await fetch ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=' + nrOfDecks);
  let deckJson = await deck.json();
  deckID = deckJson.deck_id;
  return deckID
}

async function getCardJson() {
  if (deckID == '') { deckID = await getDeck(1) };
  let card = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
  let cardJSON = await card.json();
  return cardJSON
}

// count result for computer
async function computerResult() {
  let cardJson = await getCardJson();
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
        console.log('Choose your card.')
    }

  computersResult = computersResult + +cardValue;
  computersResultText.innerHTML = "Computer's result is: " + computersResult + '.';
  return computersResult;
}


// player plays
async function currentCard() {
let cardJson = await getCardJson();

  function showCards() {
    let img = document.createElement('img');
    img.classList.add('image');
    let cardImgURL = cardJson.cards.at(0).image;
    img.setAttribute('src', cardImgURL);
    imgDiv.appendChild(img);

    stylingButton();
  }

  function showResult() {
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
        console.log('Choose your card.')
    }

  result = result + +cardValue;
  resultText.innerHTML = 'Your result is: ' + result + '.';
  return result;
}

showCards();
showResult();
computerResult();


function determineTheWinner() {
 /*  if (result == 21 & computerResult() == 21) {
    alert("It's a tie, please try again!")
  } */
  if (result == 21) {
    resultText.innerHTML += ' Congrats, you won! <span>&#129395</span>';
    playAgainBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
  }
  /* if (computerResult() == 21) {
    computersResultText.innerHTML += ' Congrats, you won! <span>&#129395</span>';
    playAgainBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
  } */
  if (result > 21) {
    resultText.innerHTML += ' Sorry, you lost! <span>&#129322</span>';
    playAgainBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
  }
  
}
determineTheWinner();
}


btn.addEventListener('click', () => { 
  currentCard();
  stopBtn.style.visibility = 'visible';
})