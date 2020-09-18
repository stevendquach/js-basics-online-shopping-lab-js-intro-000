var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart (item) {
  var price = Math.floor(Math.random()*100+1);
  var sent = {itemName: item, itemPrice: price}
  cart.push(sent);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0)
    return (`Your shopping cart is empty.`)
  var item1 = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  if (cart.length == 1)
    return `${item1}.`
  var item2 = `${cart[1].itemName} at $${cart[1].itemPrice}`
  if (cart.length == 2)
    return (`${item1}, and ${item2}.`)
  var item3 = `${cart[2].itemName} at $${cart[2].itemPrice}`
  if (cart.length == 3)
    return (`${item1}, ${item2}, and ${item3}.`)// write your code here
}

function total() {
  var totes = 0
    for (var i = 0; i < cart.length; i++){
      totes += cart[i].itemPrice;
    }
    return totes
  // write your code here
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName == item){
      return cart.splice(i,1)}
    }
    return (`That item is not in your cart.`)  
   }    
  // write your code here}
}

function placeOrder(cardNumber) {
  // write your code here
}
