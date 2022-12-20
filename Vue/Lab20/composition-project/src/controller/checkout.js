import { getAll } from '../controller/storage'
import { findSingleProduct } from   '../controller/data'

let checkoutItems = getAll('inCart').map(item => {
  const dataObj = findSingleProduct(item.sku)
  return {
    ...item,
    name: dataObj['Name of product'],
    pricePerPiece: dataObj.EUR
  }
})


export {
  checkoutItems,
}