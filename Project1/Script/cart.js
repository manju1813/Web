let cart = JSON.parse(localStorage.getItem('cart')) || []
let cartCount = document.getElementById('cartCount')
cartCount.innerText = `(${cart.length})`




function displayProducts() {
    let productContainer = document.getElementById('product-container')
    console.log(productContainer)
    let total = 0;
    productContainer.innerHTML += cart.map((item) => {
        console.log(item)
        total += item.price;
        console.log(total)
        return `
        <div class="ItemCard">
                <img src="${item.image}" alt="${item.name}">
                <div class="itemDetails">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>₹ ${item.price}</p>
                    <div class="cartBtns">
                        <button>Remove Items</button>
                    </div>
                </div>
            </div>
        `

    })
    document.getElementById('total').textContent = ` ₹ ${total} /-`
}
displayProducts()