function createProductObj(sku) {
  let product = {
    sku,
    quantity: 1
  }
  return product
}

function storeProductObj(obj) {
//what if that product is already in the cart?
  let array = JSON.parse(localStorage.getItem('inCart')) || []
  array = [...array, obj]
  localStorage.setItem('inCart', JSON.stringify(...array))
}

//used to update qty if we click on add to cart more times
function updateQuantity(obj) {
  let updatedObj = obj;
  updatedObj.quantity += 1;
  return updatedObj
}

function addToCart(sku) {
  storeProductObj(createProductObj(sku))
}

export { 
  addToCart,
} 