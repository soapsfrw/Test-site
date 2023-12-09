// Your JavaScript functions go here
const cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  let total = 0;

  // Clear previous items
  cartItemsElement.innerHTML = '';

  // Display current items
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
    total += item.price;
  });

  // Update total
  cartTotalElement.textContent = total.toFixed(2);
}

function checkout() {
  // In a real-world scenario, you would send the cart data to a backend for processing.
  alert('Checkout complete!');
  // Clear the cart after checkout
  cartItems.length = 0;
  updateCart();
}
