function getAll(storageItem) {
  const isArchived = localStorage.getItem(storageItem)
  if (isArchived) return JSON.parse(isArchived)
  return []
}

function getItem(storageItem, key, value) {
  const result =  getAll(storageItem).filter(item => item[key] === value)

  if (result.length > 1) throw Error("There is more than one unique result found")

  return result.at(0)
}

function add(storageItem, obj) {
  const json = JSON.stringify([...getAll(storageItem), obj])
  localStorage.setItem(storageItem, json)
  return
}

function remove(storageItem, key, value) {
  const filtered = getAll(storageItem).filter(item => item[key] !== value)
  const json = JSON.stringify(filtered)
  localStorage.setItem(storageItem, json)
}

function inArchive(storageItem, key, value) {
  return getAll(storageItem).some(item => item[key] === value)
}

//currently not in use
function update(obj, key, mathOperation, value = 1) {
  const previousValue = obj[key]

  if ( mathOperation === 'addition')
  return { 
    ...obj,
    [key]: previousValue + value,
  }

  if ( mathOperation === 'subtraction')
  return { 
    ...obj,
    [key]: previousValue - value,
  }
}

export {
  add,
  update,
  remove,
  inArchive,
  getAll,
  getItem,
}