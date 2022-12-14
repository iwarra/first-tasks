import { add, getAll, update, inArchive, remove, getItem } from "./storage"

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
    // Created a new product from the existing one in archive. Uppdated price and quantity and removing the old one before the new one is added to storage
    remove('inCart', 'sku', sku)
  }
  add('inCart', createProductObj(sku, qty, price))
}

function countTotal(storageItem, key) {
  let allProducts = getAll(storageItem)
  return allProducts.reduce((previous, current) => {
    return previous + current[key]
  }, 0)
}


export { 
  addToCart,
  countTotal
} 