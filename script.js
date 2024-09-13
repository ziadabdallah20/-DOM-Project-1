// Function to calculate total price
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = total;
}

// Event listener for "+" button
document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        calculateTotal();
    });
});

// Event listener for "-" button
document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = --quantity;
            calculateTotal();
        }
    });
});

// Event listener for deleting items
document.querySelectorAll('.delete-item').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
        calculateTotal();
    });
});

// Event listener for liking items
document.querySelectorAll('.like-item').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

// Initial calculation of total price
calculateTotal();
