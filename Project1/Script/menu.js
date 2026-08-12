let products = [
    {
        id: 1,
        name: "Espresso",
        category: "hotCoffee",
        price: 149,
        image: "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc28lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
        description: "Strong and rich freshly brewed espresso."
    },
    {
        id: 2,
        name: "Cappuccino",
        category: "hotCoffee",
        price: 179,
        image: "https://img.magnific.com/free-photo/close-up-latte-art_23-2151942593.jpg?semt=ais_test_b&w=740&q=80",
        description: "Smooth espresso with steamed milk foam."
    },
    {
        id: 3,
        name: "Cafe Latte",
        category: "hotCoffee",
        price: 189,
        image: "https://nucleuscoffee.com/cdn/shop/articles/Latte-recipe.jpg",
        description: "Creamy coffee with perfectly steamed milk."
    },
    {
        id: 4,
        name: "Americano",
        category: "hotCoffee",
        price: 139,
        image: "https://cdn.shopify.com/s/files/1/0669/0966/7619/files/americano-coffee-in-white-cup-crema-on-wood-table-wrexham-bean.webp?v=1745258094",
        description: "Classic espresso with hot water."
    },
    {
        id: 5,
        name: "Cold Coffee",
        category: "coldCoffee",
        price: 179,
        image: "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
        description: "Chilled creamy coffee served with ice."
    },
    {
        id: 6,
        name: "Cold Mocha",
        category: "coldCoffee",
        price: 199,
        image: "https://www.acouplecooks.com/wp-content/uploads/2022/02/Iced-Mocha-004.jpg",
        description: "Cold coffee blended with chocolate."
    },
    {
        id: 7,
        name: "Iced Latte",
        category: "coldCoffee",
        price: 189,
        image: "https://brot.ae/cdn/shop/files/Iced_Latte_1.jpg?crop=center&height=1200&v=1746423624&width=1200",
        description: "Refreshing espresso with cold milk."
    },
    {
        id: 8,
        name: "Masala Chai",
        category: "tea",
        price: 129,
        image: "https://www.thespicehouse.com/cdn/shop/articles/Chai_Masala_Tea_1200x1200.jpg?v=1606936195",
        description: "Traditional Indian tea with aromatic spices."
    },
    {
        id: 9,
        name: "Green Tea",
        category: "tea",
        price: 119,
        image: "https://img.magnific.com/free-photo/leaf-plate-wood-object-healthy-eating_1172-451.jpg?semt=ais_test_b&w=740&q=80",
        description: "Light and refreshing green tea."
    },
    {
        id: 10,
        name: "Ginger Tea",
        category: "tea",
        price: 109,
        image: "https://recipe52.com/wp-content/uploads/2022/11/ginger-milk-tea_1.jpg",
        description: "Warm tea infused with fresh ginger."
    },
    {
        id: 11,
        name: "Chocolate Cake",
        category: "desserts",
        price: 149,
        image: "https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800",
        description: "Rich and delicious chocolate cake."
    },
    {
        id: 12,
        name: "Choco Lava Cake",
        category: "desserts",
        price: 179,
        image: "https://5.imimg.com/data5/SELLER/Default/2024/5/416116214/ZW/QX/PC/132900754/chocolava-cake-500x500.jpeg",
        description: "Warm chocolate cake with molten chocolate."
    },
    {
        id: 13,
        name: "Brownie",
        category: "desserts",
        price: 129,
        image: "https://bakewithshivesh.com/wp-content/uploads/2024/08/960E4D82-3A2F-436E-89AA-26F56A856DFE.jpg",
        description: "Soft and fudgy chocolate brownie."
    }

];

console.log(products)


function displayProducts(data){
    let itemsList=document.getElementById('itemList')
    console.log(itemsList)

    itemsList.innerHTML="";

    if(data.length===0){
        itemsList.innerHTML=`
        <div class="noProducts">
            <h2>No Products Found</h2>
        </div>
        `
        return;
    }
    data.forEach((item)=>{
        console.log(item)
        itemsList.innerHTML+=`
        <div class="ItemCard">
                <img src="${item.image}" alt="${item.name}">
                <div class="itemDetails">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>₹ ${item.price}</p>
                    <div class="cartBtns">
                        <button onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `
    })
}
displayProducts(products)

function filterItems(category){
    if(category==="all"){
        displayProducts(products)
    }else{
        let filteredItems=products.filter((item)=>item.category===category)
        displayProducts(filteredItems)
    }
}


function searchFilter(){
    let searchBox=document.getElementById('searchBox').value.toLowerCase()
    console.log(searchBox)

    let filterData=products.filter((item)=>{
        return item.name.toLowerCase().includes(searchBox)
    })
    displayProducts(filterData)
}

function addToCart(id){
    let cart=JSON.parse(localStorage.getItem('cart'))||[]

    let item=products.find((f)=>f.id===id)
    console.log(item)

    cart.push(item)
    localStorage.setItem('cart',JSON.stringify(cart))
    alert(`${item.name} added to cart`)
}

let cart=JSON.parse(localStorage.getItem('cart'))||[]
let cartCount=document.getElementById('cartCount')
cartCount.innerText=`(${cart.length})`