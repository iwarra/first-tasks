// variables
const email = document.getElementById("email");
const firstPasswordInput = document.getElementById("password");
const secondPasswordInput = document.getElementById("confirmPassword");

// custom validate logic
function validateInput(event) {
  let target = event.target;
  target.validity.patternMismatch == true ? 
  addActiveClass(target) : 
  removeActiveClass(target);
};

function validatePasswordMatch(event) {
  let target = event.target;
  firstPasswordInput.value !== target.value ?
  addActiveClass(target) : 
  removeActiveClass(target);
};

function delayError(event) {
  let elem = event.target
  let timer;

  (function wrapper() {
    let func;
    clearTimeout(timer)

    elem.name == "email" || elem.name == "password" ?
    func = validateInput :
    func = validatePasswordMatch

    timer = setTimeout( () => func(event), 2000)
  })()

}

// event listeners for validating custom logic
email.addEventListener("input", delayError);
firstPasswordInput.addEventListener('input', delayError);
secondPasswordInput.addEventListener('input', delayError);

// helper functions for styling
function addActiveClass(element) {
  element.style.border = '1px solid red';
  element.nextElementSibling.classList.add('active');
}

function removeActiveClass(element) {
  element.style.border = '0.5px solid lightgray';
  element.nextElementSibling.classList.remove('active');
}


