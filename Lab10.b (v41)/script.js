let imgDiv = document.querySelector('.imageDiv');
let btn = document.querySelector('.btn');
let resultText = document.querySelector('.result-text');
let computersResultText = document.querySelector('.computer-result-text');
let playAgainBtn = document.querySelector('.play-again-btn');
let stopBtn = document.querySelector('.stop-btn');
let result = 0;
let computersResult = 0;
let deckID = '';

function stylingHitMeButton() {
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

// computer plays
async function computerPlays() {
  let cardJson = await getCardJson();
  let cardValue = cardJson.cards[0].value;

  do { 
    computersResult += +translateCardValues(cardValue, computersResult) 
  } while (computersResult < result & computersResult < 23)
  
}

function showCompResult() {
  computersResultText.innerHTML = "Computer's result is: " + computersResult + '.';
  return computersResult;
}

// player plays
async function currentCardPlayer() {
let cardJson = await getCardJson();

  function showCards() {
    let img = document.createElement('img');
    img.classList.add('image');
    let cardImgURL = cardJson.cards.at(0).image;
    img.setAttribute('src', cardImgURL);
    imgDiv.appendChild(img);

    stylingHitMeButton();
  }

  function showResult() {
    let cardValue = cardJson.cards[0].value;

    result += +translateCardValues(cardValue, result);
    resultText.innerHTML = 'Your result is: ' + result;

    if (result > 21) {
      playerLost();
      btn.removeEventListener('click', clickHitMeEvent);
    }
    
    if (result == 21) {
      playerWon();
      btn.removeEventListener('click', clickHitMeEvent);
    }

    return result;
  }

  showCards();
  showResult();
}

// if player wins (display changes)
function playerWon() {
  resultText.innerHTML += '.  Congrats, you won! <span>&#129395</span>';
  playAgainBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
  return 
};

// if player looses (display changes)
function playerLost() {
  resultText.innerHTML += '.  Sorry, you lost! <span>&#129322</span>';
  playAgainBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
  return
};

// in case of a tie
function tiedResult() {
  resultText.innerHTML += ".  It's a tie! <span>&#128558</span> Try again!";
  playAgainBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
  return 
}

function determineTheWinner() {
  if (result == computersResult) return tiedResult();
  if (computersResult == 21) return playerLost();
  if (result < 21 & computersResult < 21) {
    ((21 - result) < (21 - computersResult)) ? playerWon() : playerLost();
  }
  if (result < 21 & computersResult > 21) return playerWon();
}

function clickHitMeEvent() {
  currentCardPlayer();
  computerPlays();
  stopBtn.style.visibility = 'visible';
}

btn.addEventListener('click', clickHitMeEvent);

stopBtn.addEventListener('click', () => {
  showCompResult();
  determineTheWinner();
  btn.removeEventListener('click', clickHitMeEvent);
})
