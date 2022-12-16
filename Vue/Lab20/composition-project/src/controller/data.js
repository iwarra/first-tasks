import products from '../data/products.json'

let nrOfDivisions = Math.ceil(products.length / 16)

let paginated = []
function divideIntoSmallerArr(start, stop) {
  if (paginated.length >= nrOfDivisions) return
  paginated.push(products.slice(start, stop))
  divideIntoSmallerArr(start + 16, stop +16)
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