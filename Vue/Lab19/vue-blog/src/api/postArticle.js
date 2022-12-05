const url = 'https://jsonplaceholder.typicode.com/posts/1'

async function postAnArticle(data) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
       },
    body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
}

export {
  postAnArticle,
}