// Global scope

// let username="Manju"
// console.log(username)

// function displayName(){
//     console.log(username)
// }
// displayName()
// {
//     console.log(username)
// }
// Function scope

// function data()
// {
//     var a=10;
//     let b=20;
//     const c=30;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// data()

// console.log(a)
// console.log(b)
// console.log(c)

// Block scope

// {
//     var a=10;
//     let b=20;
//     const c=30;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

//Lexical scope

function outer(){
    var username="Manju"
    let age=22
    const address="Hunsur"

    console.log(username)
    console.log(age)
    console.log(address)


function inner()
{
    let college="Mycem"
    console.log(username)
    console.log(age)
    console.log(address)
}
inner()

}
outer()