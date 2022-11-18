const backendURL = {
  url: 'http://localhost',
  PORT: 3000,
}

async function getDatabase() {
  const { url, PORT } = backendURL;
  const endpoint = '/getdatabase';
  let response = await fetch(`${url}:${PORT}${endpoint}`)
  if (!response.ok) throw new Error('Response not OK.');
  const jsonResponse = await response.json()
  return jsonResponse
}

function check(id, checked) {
  const { url, PORT } = backendURL;
  const endpoint = '/check';
  fetch(`${url}:${PORT}${endpoint}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, checked }),
  })
}

async function structureTask(task) {
  const { url, PORT } = backendURL;
  const endpoint = '/structuredata';
  let response = await fetch(`${url}:${PORT}${endpoint}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task }),
  })
  return response.json()
}

async function save(modifiedTask) {
  const { url, PORT } = backendURL;
  const endpoint = '/save';
  await fetch(`${url}:${PORT}${endpoint}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(modifiedTask),
  })
}

async function deleteTask(id) {
  const { url, PORT } = backendURL;
  const endpoint = `/delete/:${id}`;
  fetch(`${url}:${PORT}${endpoint}`, {
    method: 'DELETE',
  })
}

export {
  getDatabase,
  check,
  structureTask,
  save,
  deleteTask,
}