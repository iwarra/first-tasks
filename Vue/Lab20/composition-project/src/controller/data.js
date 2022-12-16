import products from '../data/products.json'

// defines number of products to display per page
let qty = 16
let nrOfDivisions = Math.ceil(products.length / qty)

let paginated = []
function divideIntoSmallerArr(start, stop) {
  if (paginated.length >= nrOfDivisions) return
  paginated.push(products.slice(start, stop))
  divideIntoSmallerArr(start + qty, stop + qty)
}
divideIntoSmallerArr(0, 16)

function findSingleProduct(sku) {
  return products.find(product => product.SKU == sku)
}

export {
  paginated,
  divideIntoSmallerArr,
  findSingleProduct
}