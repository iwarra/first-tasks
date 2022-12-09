const wordpressAPI = "https://thesmokedetector.net/wp-json/wp/v2"
const allOrigins = `https://api.allorigins.win/raw?url=${encodeURIComponent(wordpressAPI)}`

//function to get one specific post with an id 
async function getPost(endpoint = "posts", id) {
  if (id === '') id = localStorage.getItem('storedID')

  let postRequest = await fetch(`${allOrigins}/${endpoint}/${id}`)
  if (!postRequest.ok) throw Error("Request is not ok")
  let post = await postRequest.json()
  let data = {
    id: post.id,
    title: post.title.rendered,
    article: post.content.rendered
  }
  localStorage.setItem('storedID', data.id)
  return data
}

function placeContent(content) {
  const {tagName, textContent, children, link} = content

  if (children.some(child => {
    if (child.textContent.length === 0) return false
    return child.textContent === textContent
    }
  )) return null

  if (textContent.length <= 2 && tagName !== "A") return null

  if (tagName === "A") {
    const images = [".jpg", ".png", ".jpeg", ".gif"]
    if (images.some(ext => link.includes(ext))) {
      return `<img src="${link}">`
    } else {
      return `<a href="${link}">${textContent}</a>`
    }
  }

  if (tagName === "B") {
    return `<h3>${textContent}</h3>`
  }

  if (tagName === 'I') return null

  return `<${tagName}>${textContent}</${tagName}>`
}

function htmlParser(content) {
  let data = new window.DOMParser().parseFromString(content, "text/html")
  data = [...data.all]
    .filter(elem => {
      const removeTags = ["HTML", "HEAD", "BODY"]
      if (removeTags.some(tag => tag === elem.tagName)) return
      return elem
    })
    .map(elem => {
      return {
        tagName: elem.tagName,
        textContent: elem.textContent,
        link: elem.href,
        children: [...elem.children],
      }
    })
  return data
}

function formatPost(result) {
  let title = result.title
  let content = htmlParser(result.article)
  .map(elem => placeContent(elem))
  .join("")
  let article = {
    title,
    content
  }
  return article
}


export {
  getPost,
  htmlParser,
  placeContent,
  formatPost,
}

