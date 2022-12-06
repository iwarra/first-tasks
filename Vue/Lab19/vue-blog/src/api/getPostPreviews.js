/* const wordpressAPI = "https://thesmokedetector.net/wp-json/wp/v2" */
const wordpressAPI = "https://tsd.kwikly.info/wp-json/wp/v2"
const allOrigins = `https://api.allorigins.win/raw?url=${encodeURIComponent(wordpressAPI)}` 

async function getPostsToPreview(endpoint = "posts") {
  let postRequest = await fetch(`${allOrigins}/${endpoint}`)
  if (!postRequest.ok) throw Error("Request is not ok")
  let posts = await postRequest.json()
  console.log(posts)
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