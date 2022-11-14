import * as api from "./api.js"

const addBTN = document.querySelector('.addTask')
const container = document.querySelector('.container');
const taskInput = document.querySelector('.inputTask');

// LOGIC
const app = api

//Visuals
function showAllTasks() {
  app.getDatabase().then( entries => {
    entries.forEach(entry => showTask(entry))

    //adding eventListener to all checkboxes 
  selectCheckBoxes().forEach(checkbox => {
    checkbox.addEventListener('click', e => checkTask(e))
    })

    //adding eventListener to all bin icons
  selectAllBins().forEach(icon => {
    icon.addEventListener('click', e => deleteShownTask(e))
    })
  })
}
showAllTasks();

function showTask(input) {
  let taskDiv = document.createElement('div');
  taskDiv.classList = 'taskDiv';
  taskDiv.id = input.id;
  container.append(taskDiv);
  
  let taskSpan = document.createElement('span');
  taskSpan.classList = 'task' ;
  let dateSpan = document.createElement('span');
  dateSpan.classList = 'date' ;
  
  taskSpan.innerText = input.task;
  dateSpan.innerText = input.date.slice(0, 10);
  
  taskDiv.append(taskSpan)
  taskDiv.append(dateSpan)
  
  let boxesDiv = document.createElement('div');
  boxesDiv.classList = 'boxes';
  dateSpan.insertAdjacentElement('afterend', boxesDiv);
  
  let inputField = document.createElement('input');
  inputField.classList = 'checkbox';
  inputField.type = 'checkbox';
  inputField.checked = input.checked;

  let trashBin = document.createElement('span');
  trashBin.classList = 'deleteBin';
  trashBin.innerHTML =' &#x1F5D1;'
  boxesDiv.append(inputField);
  boxesDiv.append(trashBin);
}

function selectCheckBoxes() {
  const checkBoxes = document.querySelectorAll('.checkbox');
  return checkBoxes
}

function checkTask(e) {
  let id = e.target.parentElement.parentElement.id;
  let value = e.target.checked;
  app.check(Number(id), value)
}

function selectAllBins() {
  const removeIcons = document.querySelectorAll('.deleteBin');
  return removeIcons;
}

function deleteShownTask(e) {
  let id = e.target.parentElement.parentElement.id;
  let elem2Remove = document.getElementById(id);
  elem2Remove.remove()
  app.deleteTask(Number(id))
}

async function saveAndReload() {
  let structuredTask = await app.structureTask(taskInput.value)
  await app.save(structuredTask)
  location.reload()
}

//Add new button on click event
addBTN.addEventListener('click', saveAndReload)

// Input on keyup event, only for the enter key
taskInput.addEventListener('keyup', e => {
  if (e.code !== 'Enter') return 
  saveAndReload()
})

