let img = document.createElement('img');
let imgDiv = document.querySelector('.image');
let btn = document.querySelector('.btn');

async function getCardJson() {
  let card = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
  let cardJSON = await card.json();
  return cardJSON
}

async function showCard() {
  let cardURL = await getCardJson()
  let card = cardURL.cards.at(0).image
  img.setAttribute('src', card);
  imgDiv.appendChild(img)

  let btnText = document.querySelector('.btn-text');
  btnText.classList.add('after')
}

btn.addEventListener('click', () => {
  showCard();
})