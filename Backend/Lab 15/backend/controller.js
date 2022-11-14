import Task from "./schemas/taskSchema.js"

function structureData(input) {
  return {
    id: Math.floor(Math.random() * 1000),
    task: input,
    date: new Date().toString(),
    checked: false,
  }
}

async function getDatabase() {
  return await Task.find()
}


function saveInput(id, task, date, checked) {
  Task.create({
    id,
    task,
    date,
    checked,
  })
}

async function deleteInput(id) {
  const deleteObj = await Task.exists({id});
  Task.findByIdAndRemove(deleteObj, (err, docs) => {
    if (err) {
      console.log(err)
    }
  })
}

async function checkInput({ id, checked }) {
  const checkObj = await Task.exists({id});
  Task.findByIdAndUpdate(checkObj, { checked }, (err, docs) => {
    if (err) {
    console.log(err)
  }})
}

function add(task) {
  saveInput(structureData(task))
}

export {
  getDatabase,
  add,
  checkInput as check,
  deleteInput as deleteTask,
  saveInput as save,
  structureData,
}