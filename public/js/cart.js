const cart = [
  {
    name: 'Card Name',
    price: 0,
    image: 'description',
    id: 0,
  }
  {
    name: 'Card Name',
    price: 0,
    image: 'description',
    id: 1,
  }
  {
    name: 'Card Name',
    price: 0,
    image: 'description',
    id: 2,
  }
]

//this function should get called on a click event for the 'add' button on the browse page
function addItem(name, image) {
  cart.append({
    //NOTE: this is psuedocode and is by no means meant to be working code
    {
      name: name
      id: cart[biggestInd].id++,
      image: image,
    }
  })
}

function deleteItem(selectedId) {
  //using a functional syntax in ES6, filter out the item of the selectedId
  //uses lodash library
  const nextArray = _.filter(cart, (cartItem) => {
    return cart.id !== id;
  });
}
