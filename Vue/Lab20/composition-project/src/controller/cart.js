import { add, getAll, update, inArchive, remove, getItem } from "./storage"

function createProductObj(sku, qty, price) {
  return {
    sku,
    qty,
    price
  }
}

function addToCart(sku, qty = 1, price) {
  if (inArchive('inCart', 'sku', sku)) {
    const item = getItem('inCart', 'sku', sku)
    qty += item.qty
    // need to explain why this exists
    remove('inCart', 'sku', sku)
  }
  add('inCart', createProductObj(sku, qty, price))
}

function countTotal(storageItem, key) {
  let allProducts = getAll(storageItem)
  let total = allProducts.reduce((previous, current) => {
    return previous + current[key]
  }, 0)
   return key === 'price' ? total.toFixed(2) : total;
}


export { 
  addToCart,
  countTotal
} 