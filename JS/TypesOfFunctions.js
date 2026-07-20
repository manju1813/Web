//Anonymous
let fun=function (){
console.log("Anonymous Function")
}

fun()

// Named function
function fun1(){
console.log("Named Function")
}
fun1();

// Function with expression

let fun3=function (){
console.log("Anonymous Function")
}
fun3();

//Nested
function par(){
    function chi(){
        console("From child class")
    }
    chi()
    console("From child parent class")
}

//JS closure
function parent() {
let a=10;
let b=20;

function child() {
console.log(a)
console.log(b)
}
child()
}
parent()

//JS Currying
function parent() {
let a=10;
let b=20;
console.log(a)
console.log(b)

function child() {
console.log("I am a child function")
}
return child
}
parent()()

// Arrow function
let arrfun = () => {
console.log("I am Arrow function")
}

//Implicit return.
let add=(a,b)=>a+b
console.log(add(5,10))
let res = add(10,20)
console.log(res)

//Explicit return.
let add1=(n1,n2)=>{
return n1+n2
}
console.log(add(5,10))

// HOF & CBF Ex1
function add2(){
console.log(10+10)
}
function sub(){
console.log(20-10)
}
function mul(){
console.log(10*10)
}
function ariop(operator){
operator()
}
ariop(add)
ariop(sub)
ariop(mul)

//Ex2
function deposit(amount){
console.log(`${amount} deposit successfully`)
}
function withdraw(amount){
console.log(`${amount} withdraw successfully`)
}
function transfer(amount){
console.log(`${amount} transfer successfully`)
}
function bank(amount,task){
task(amount);
}
bank(1000,deposit)
bank(500,transfer)