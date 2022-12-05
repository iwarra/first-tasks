const wordpressAPI = "https://thesmokedetector.net/wp-json/wp/v2"
const allOrigins = `https://api.allorigins.win/raw?url=${encodeURIComponent(wordpressAPI)}` 

async function getPostsToPreview(endpoint = "posts", id) {
  let postRequest = await fetch(`${allOrigins}/${endpoint}`)
  if (!postRequest.ok) throw Error("Request is not ok")
  let posts = await postRequest.json()
  return posts
}

function createPostObj(res) {
  let array = []
  res.forEach(element => {
    let obj = {
      id: element.id,
      title: element.title.rendered
        .replaceAll(/&#.+?;/g, ""), 
      summary: element.excerpt.rendered
        .replaceAll(/(<p>)|(<\/p>)/g, "")
        .replaceAll(/&#.+?;/g, ""),
      link: element.link
    } 
    array.push(obj)
  })
  return array;
}


export {
  getPostsToPreview,
  createPostObj,
}