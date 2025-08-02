// Product data

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "phones",
    price: 1199.99,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "phones",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    category: "phones",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Leather Phone Case",
    category: "cases",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Clear Silicone Case",
    category: "cases",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=300&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Rugged Armor Case",
    category: "cases",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Wireless Fast Charger",
    category: "chargers",
    price: 79.99,
    image:
      "https://i.pinimg.com/1200x/5c/18/a7/5c18a79e4c3280f58fae717e560212df.jpg",
  },
  {
    id: 8,
    name: "USB-C Cable 6ft",
    category: "chargers",
    price: 19.99,
    image:
      "https://i.pinimg.com/1200x/b1/b5/3f/b1b53f28af807ae8cc74b1538f836f5d.jpg",
  },
  {
    id: 9,
    name: "Car Charger Dual Port",
    category: "chargers",
    price: 29.99,
    image:
      "https://i.pinimg.com/1200x/72/24/4e/72244e8bfe0cdb9740fe3bb68d5bea49.jpg",
  },
  {
    id: 10,
    name: "AirPods Pro 2",
    category: "headphones",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop",
  },
  {
    id: 11,
    name: "Bluetooth Earbuds",
    category: "headphones",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=200&fit=crop",
  },
  {
    id: 12,
    name: "Over-Ear Headphones",
    category: "headphones",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
  },
  {
    id: 13,
    name: "Phone Stand",
    category: "accessories",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
  },
  {
    id: 14,
    name: "Screen Protector",
    category: "accessories",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop",
  },
  {
    id: 15,
    name: "Pop Socket Grip",
    category: "accessories",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
  },
  {
    id: 16,
    name: "Portable Power Bank",
    category: "accessories",
    price: 59.99,
    image:
      "https://i.pinimg.com/736x/5f/cc/fa/5fccfa0ce0b93cda5c9d6de528264b6d.jpg",
  },
  {
    id: 16,
    name: "Portable Power Bank",
    category: "Tablet",
    price: 59.99,
    image:
      "https://i.pinimg.com/736x/5f/cc/fa/5fccfa0ce0b93cda5c9d6de528264b6d.jpg",
  },
  {
    id: 16,
    name: "Portable Power Bank",
    category: "vivo",
    price: 59.99,
    image:
      "https://i.pinimg.com/736x/5f/cc/fa/5fccfa0ce0b93cda5c9d6de528264b6d.jpg",
  },
  {
    id: 16,
    name: "Portable Power Bank",
    category: "water",
    price: 59.99,
    image:
      "https://i.pinimg.com/736x/5f/cc/fa/5fccfa0ce0b93cda5c9d6de528264b6d.jpg",
  },
];
let filteredProducts = [...products];
let currentCategory = "all";
let cart = [];
// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  displayProducts(products);
  updateCartCount();
});

function displayProducts(productsToShow) {
  const grid = document.getElementById("productsGrid");

  if (productsToShow.length === 0) {
    grid.innerHTML =
      '<div class="no-products">No products found matching your criteria.</div>';
    return;
  }

  grid.innerHTML = productsToShow
    .map(
      (product) => `
                <div class="product-card">
                    <img src="${product.image}" alt="${
        product.name
      }" class="product-image">
                    <div class="product-name">${product.name}</div>
                    <div class="product-category">${product.category}</div>
                    <div class="product-price">$${product.price.toFixed(
                      2
                    )}</div>
                    <button class="add-to-cart" onclick=addToCart(${
                      product.id
                    })>Add to Cart</button>
                </div>
            `
    )
    .join("");
}

function filterByCategory(button, category) {
  // Update active button
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  currentCategory = category;
  applyFilters();
}

function filterProducts() {
  applyFilters();
}

function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  filteredProducts = products.filter((product) => {
    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  displayProducts(filteredProducts);
}

const addToCart = (productId) => {
  const productList = products.find(({ id }) => id === productId);

  const existingItem = cart.find(({ id }) => id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...productList, quantity: 1 });
  }
  updateCartCount();
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Added";
  button.style.background = "var(--success-color)";
  setTimeout(() => {
    button.originalText = originalText;
    button.style.background = "";
  }, 1000);
};

const updateCartCount = () => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = totalItems;
};

const updateCartdisplay = () => {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class= "empty-cart"> Your cart is empty</div>';
    cartTotal.textContent = "Total : $0.00";
    return;
  }
  // cartItems.int
  cartItems.innerHTML = cart
    .map((item) => {
      return `   
   <div class="cart-item">
                    <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(
                          2
                        )}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${
                          item.id
                        } , -1)">-</button>
                        <span class="quantity" >${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${
                          item.id
                        } , 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${
                      item.id
                    })">Remove</button>
                </div>
            `;
    })
    .join("");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = "Total : " + total.toFixed(2);
};

const updateQuantity = (productId, change) => {
  const item = cart.find(({ id }) => id === productId);
  if (item) {
    item.quantity += change;
    // 5 +=-1; =4 
    // 5+=1;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    updateCartCount();
    updateCartdisplay();
  }
};
//- + = -  10 - 1= 9 
const removeFromCart = (productId) => {
  cart = cart.filter(({ id }) => id != productId);
  updateCartCount();
  updateCartdisplay();
};

//  close modal
function toggleCart() {
  const modal = document.getElementById("cartModal");
  const isVisible = modal.style.display === "block";

  if (isVisible) {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
    updateCartdisplay();
  }
}

function closeCartOnBackdrop(event) {
  if (event.target === document.getElementById("cartModal")) {
    toggleCart();
  }
}
