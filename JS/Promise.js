new Promise((resolve,reject) => {
let success = true;
if(success){
resolve("Promise is fullfilled")
}
else{
reject("Promise is rejected")
}
}).then( (res) => {
console.log(res)
}).catch((rej) => {
console.log(rej)
}).finally(
console.log("I will be execute weather it is a success or failure.")
)

function login(username,password) {
return new Promise((resolve,reject) => {
if(username == "admin" && password == "1234") {
resolve("Login Successfull")
}
else{
reject("Invalid Username or Password")
}
}) 
}

login('admin','1234').then((res) =>{
    console.log(res)
}).catch((err) => {
    console.log(err)
})

//Promise Static Methods
let p1 = new Promise((resolve,reject) => {
resolve("P1 is resolve")
reject("P1 is reject")
})

let p2 = new Promise((resolve,reject) => {
resolve("P2 is resolve")
reject("P2 is reject")
})

let p3 = new Promise((resolve,reject) => {
resolve("P3 is resolve")
reject("P3 is reject")
})

let p4 = new Promise((resolve,reject) => {
resolve("P4 is resolve")
reject("P4 is reject")
})

//Promise.all()
Promise.all([p1,p2,p3,p4]).then( (abc) => {
console.log(abc)
}).catch((err) => {
	console.log(err)
})
//Promise.any()
Promise.any([p1,p2,p3,p4]).then( (abc) => {
console.log(abc)
}).catch((err) => {
	console.log(err)
})

//Promise.allSetted()
Promise.allSettled([p1,p2,p3,p4]).then( (abc) => {
console.log(abc)
}).catch((err) => {
	console.log(err)
})

//Promise.race()
Promise.race([p1,p2,p3,p4]).then( (abc) => {
console.log(abc)
}).catch((err) => {
	console.log(err)
})


// Fake API'S for learning purpose

// https://api.github.com/users
// https://api.escuelajs.co/api/v1/users
// https://api.escuelajs.co/api/v1/products
// https://jsonplaceholder.typicode.com/users
// https://fakestoreapi.com/products

// fetch('https://api.github.com/users')
// .then((res) => {
// 	return res.json();
// }).then((data) => {
// 	console.log(data)
// }).catch((err) => {
// 	console.log(err)
// })

// fetch('https://api.escuelajs.co/api/v1/users')
// .then((response) => {
// 	console.log(response)
// 	return response.json()
// }).then((data) => {
// 	console.log(data)
// 	data.forEach((user) =>{
// 		console.log(user.email)
// 		console.log(user.name)
// 	})
// })


// async & awaited
// async function getProducts() {
// 	let response=await fetch('https://fakestoreapi.com/products')
// 	console.log(response)

// 	let data=await response.json()
// 	console.log(data)

// 	data.map((product)=>{
// 		console.log(product.title)
// 		console.log(product.price)
// 	})
// }
// getProducts()

// async  function gitHubUsers() {
// 	let res=await fetch("https://jsonplaceholder.typicode.com/users")
// 	console.log(res)

// 	let data=await res.json();
// 	console.log(data)

// 	data.forEach(user => {
// 		console.log(user.name)
// 	});
// }
// gitHubUsers()

//try catch block
async  function gitHubUsers() {
	try{
	let res=await fetch("https://jsonplaceholder.typicode.com/users")
	console.log(res)

	let data=await res.json();
	console.log(data)

	data.forEach(user => {
		console.log(user.name)
	})
}catch(error){
	console.log(error)
}
}
gitHubUsers()