// 1. STATE
const state = {
    products: [
        { id: 1, name: 'HP ProBook', price: 999, image: '💻' },
        { id: 2, name: 'iPhone 13 Pro Max', price: 699, image: '📱' },
        { id: 3, name: 'Wireless Headphones', price: 199, image: '🎧' },
        { id: 4, name: 'Mechanical Keyboard', price: 120, image: '⌨️' },
        { id: 5, name: 'Curved Monitor', price: 450, image: '🖥️' },
        { id: 6, name: 'Gaming Mouse', price: 85, image: '🖱️' },
        { id: 7, name: 'Smart Watch', price: 250, image: '⌚' },
        { id: 8, name: 'Desk Lamp', price: 45, image: '💡' },
    ],
    cart: JSON.parse(localStorage.getItem('iyf_cart')) || [],
};

// 2. FUNCTIONS (Made "Global" automatically)
window.addToCart = function (productId) {
    const existing = state.cart.find((item) => item.productId === productId);
    if (existing) {
        existing.quantity++;
    } else {
        state.cart.push({ productId, quantity: 1 });
    }
    saveAndRender();
};

window.updateQuantity = function (productId, newQuantity) {
    const item = state.cart.find((item) => item.productId === productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        if (item.quantity <= 0) {
            state.cart = state.cart.filter((i) => i.productId !== productId);
        }
        saveAndRender();
    }
};

window.removeFromCart = function (productId) {
    state.cart = state.cart.filter((item) => item.productId !== productId);
    saveAndRender();
};

function saveAndRender() {
    localStorage.setItem('iyf_cart', JSON.stringify(state.cart));

    // Update Header Count
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('header-cart-count').textContent = count;

    // Render Total
    const total = state.cart.reduce((sum, item) => {
        const p = state.products.find((prod) => prod.id === item.productId);
        return sum + p.price * item.quantity;
    }, 0);
    document.getElementById('cart-total').textContent = total;

    renderCart();
}

function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = state.products
        .map(
            (p) => `
        <div class="product-card">
            <div class="icon">${p.image}</div>
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `
        )
        .join('');
}

function renderCart() {
    const container = document.getElementById('cart-display');
    if (state.cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    container.innerHTML = state.cart
        .map((item) => {
            const p = state.products.find((prod) => prod.id === item.productId);
            return `
            <div class="cart-item">
                <span>${p.name} ($${p.price})</span>
                <input type="number" value="${item.quantity}" style="width: 40px"
                    onchange="updateQuantity(${item.productId}, this.value)">
                <button onclick="removeFromCart(${item.productId})">Remove</button>
            </div>
        `;
        })
        .join('');
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    saveAndRender();
    document.getElementById('clear-cart-btn').onclick = () => {
        if (confirm('Clear cart?')) {
            state.cart = [];
            saveAndRender();
        }
    };
});
