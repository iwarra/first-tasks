import { add, getAll, inArchive, remove, getItem } from "./storage"

function createProductObj(sku, qty, price) {
  return {
    sku,
    qty,
    price
  }
}

function updateCart(sku, price, mathOperation, qty = 1) {
  if (inArchive('inCart', 'sku', sku)) {
    const item = getItem('inCart', 'sku', sku)
    
    if ( mathOperation === 'addition') {
      if (qty > 1) price = item.price + (price * qty)

      else price += item.price;
      qty += item.qty
    }
    else if ( mathOperation === 'subtraction') { 
      if (qty > 1 ) price = item.price - (price * qty)
      
      else price = item.price - price
      qty = item.qty - qty
    }
    // Created a new product from the existing one in archive. Uppdated price and quantity and removing the old one before the new one is added to the storage
    remove('inCart', 'sku', sku)
  }
  add('inCart', createProductObj(sku, qty, price))
}

function countTotal(storageItem, key) {
  let allProducts = getAll(storageItem)

  if (key ==='price') return allProducts.reduce((previous, current) => {
    return previous + current[key] }, 0).toFixed(2)

  return allProducts.reduce((previous, current) => {
      return previous + current[key] }, 0)
}

function getTotalPricePerProduct(sku) {
  const item = getItem('inCart', 'sku', sku)
  return item.price
}

export { 
  countTotal,
  updateCart,
  getTotalPricePerProduct
} 