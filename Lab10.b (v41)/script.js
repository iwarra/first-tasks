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

function translateCardValues(cardValue, result) {
  let imageCards = ['JACK', 'KING', 'QUEEN'];
  let ace = 'ACE'

  switch (true) {
    case (cardValue > 1 && cardValue <= 10):
      return cardValue;
    case imageCards.includes(cardValue):
      return cardValue = 10;
    case cardValue == ace:
      return result > 12 ? cardValue = 1 : cardValue = 11;
  }
}

// count result for computer
let compResultsArr = [];
async function computerResult() {
  let cardJson = await getCardJson();
  let cardValue = cardJson.cards[0].value;

  computersResult = computersResult + +translateCardValues(cardValue, computersResult);

  compResultsArr.push(computersResult);

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

    result = result + +translateCardValues(cardValue, result);
    resultText.innerHTML = 'Your result is: ' + result + '.';
    return result;
  }

  showCards();
  showResult();
  computerResult();

  function playerWon() {
    resultText.innerHTML += ' Congrats, you won! <span>&#129395</span>';
    playAgainBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
    return 
  };

  function playerLost() {
    resultText.innerHTML += ' Sorry, you lost! <span>&#129322</span>';
    playAgainBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
    return
  };

  function determineTheWinner() {
    compFinalResult = compResultsArr.at(compResultsArr.length - 1);

    if (result == 21 & compFinalResult == 21) {
      alert("It's a tie!")
    }

    if (result == 21) playerWon();
    if (compFinalResult == 21) playerLost();

    if (result > 21 & compFinalResult > 21) {
      (result > compFinalResult) ? playerLost() : playerWon();
    }

    /* if (result < 21 & compFinalResult < 21) {
      result > compFinalResult ? playerWon() : playerLost();
    } 
    Should this be the case for stop button???
    */

    // Cases when one is over and the other is under 21
  }

  determineTheWinner();

}


btn.addEventListener('click', () => { 
  currentCard();
  stopBtn.style.visibility = 'visible';
})