// Variable declaration
const imgDiv = document.querySelector('.imageDiv');
const btn = document.querySelector('.btn');
const resultText = document.querySelector('.result-text');
const computersResultText = document.querySelector('.computer-result-text');
const playAgainBtn = document.querySelector('.play-again-btn');
const stopBtn = document.querySelector('.stop-btn');
let result = 0;
let computersResult = 0;
let deckID = '';


async function getDeck(nrOfDecks) {
  let deck = await fetch ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=' + nrOfDecks);
  let deckJson = await deck.json();
  deckID = deckJson.deck_id;
  console.log("getDeck", deckID)
  return deckID
}

//choose a card and get card info
async function play() {
  if (!deckID) deckID = await getDeck(1);

  let card = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`);
  let cardJson = await card.json();

  return {
    cardValue: cardJson.cards.at(0).value,
    cardImage: cardJson.cards.at(0).image,
    ID: cardJson.deck_id,
  }
}

// computer plays
async function computerPlays() {
  let cardInfo = await play();

  // is there a better way to prevent comp from having high results ? (used < 23)
  while (computersResult < result & computersResult < 23) { 
    computersResult += +translateCardValues(cardInfo.cardValue, computersResult) 
  }

}

// player plays
async function currentCardPlayer() {
  let cardInfo = await play();
  let cardValue = cardInfo.cardValue;
  let cardImgURL = cardInfo.cardImage;
  showCard(cardImgURL);
  
  function showResult() {
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

// helper functions

function showCompResult() {
  computersResultText.innerHTML = "Computer's result is: " + computersResult + '.';
  return computersResult;
}

function showCard(url) {
  let img = document.createElement('img');
  img.classList.add('image');
  img.setAttribute('src', url);
  imgDiv.appendChild(img);
  
  stylingHitMeButton();
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

function stylingHitMeButton() {
  let btnText = document.querySelector('.btn-text');
  btnText.classList.add('after')
}
