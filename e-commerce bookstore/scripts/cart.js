const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.querySelector(".cart_count");

cartCount.textContent = cart.length;

