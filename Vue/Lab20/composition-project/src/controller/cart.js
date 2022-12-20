import { add, getAll, inArchive, remove, getItem } from "./storage"

function createProductObj(sku, qty, price) {
  return {
    sku,
    qty,
    price
  }
}

function addToCart(sku, price, qty = 1) {
  if (inArchive('inCart', 'sku', sku)) {
    const item = getItem('inCart', 'sku', sku)
    qty += item.qty
    price += item.price
    // Created a new product from the existing one in archive. Uppdated price and quantity and removing the old one before the new one is added to the storage
    remove('inCart', 'sku', sku)
  }
  add('inCart', createProductObj(sku, qty, price))
}

function updateCart(sku, price, qty = 1) {
  let newQuantity
  let newPrice
  if (inArchive('inCart', 'sku', sku)) {
    const item = getItem('inCart', 'sku', sku)
    newQuantity = item.qty - qty
    item.qty = newQuantity
    newPrice = item.price - price
    item.price = newPrice
    // Created a new product from the existing one in archive. Uppdated price and quantity and removing the old one before the new one is added to the storage
    remove('inCart', 'sku', sku)
  }
  add('inCart', createProductObj(sku, newQuantity, newPrice))
}

function countTotal(storageItem, key) {
  let allProducts = getAll(storageItem)

  if (key ==='price') return allProducts.reduce((previous, current) => {
    return previous + current[key] }, 0).toFixed(2)

  return allProducts.reduce((previous, current) => {
      return previous + current[key] }, 0)
}


export { 
  addToCart,
  countTotal,
  updateCart
} 