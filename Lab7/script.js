// task 1
let btn = document.getElementById('btn');

function uppdatePara() {
  let p = document.getElementById('para');
  p.textContent = 'Denna paragraf är ny och fräsch.';
}

btn.addEventListener('click', uppdatePara);

/* Another option, directly in HTML:
<button id="btn" onclick = 'uppdatePara()'>Uppdatera</button>  */


//task 2
let button = document.getElementById('btn-link');

function uppdateLink() {
  let link = document.getElementById('link');
  link.href = 'https://google.com/' ;
}

button.addEventListener('click', uppdateLink);


//task 3
let resultPara = document.createElement('p');
resultDiv.append(resultPara)

function cube(width, length, height) {
  width = document.querySelector('#width');
  length = document.querySelector('#length');
  height = document.querySelector('#height');

  
  let result = width.value * height.value * length.value;
  let summary = [`width: ${width.value}`, `length: ${length.value}`, `height: ${height.value}`]

  resultPara.textContent = "Your result is: " + result + 
                           "\n" + "Your input was: " + 
                           summary.join(", ");

  resultPara.style.whiteSpace = "pre-line";

  width.value = "";
  length.value = "";
  height.value = "";
  
}

let resultButton = document.querySelector('#resultButton');
resultButton.addEventListener('click', cube) 