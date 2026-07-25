//1.Write a program to print Hello world
console.log("Hello world!")

//2.Write a program to add a number
let n1=10;
let n2=20;
console.log(`Sum = ${n1+n2}`)

//3.Write a program to swap two number.
let a=10;
let b=20;
console.log("Before swaping")
console.log(a)
console.log(b)
let temp=a;
a=b;
b=temp;
console.log("After swaping")
console.log(a)
console.log(b)

//4.Write a program to check a number is even or odd
// let num1 = Number(prompt("Enter a number"));
let num1 = 7;
if(num1%2==0){
    console.log(`${num1} is a even number`)
}
else{
    console.log(`${num1} is a odd number`)
}

//5.Write a program to check a number is positive, negative or zero
let n = 15;
if(n>0){
    console.log(`${n} is a positive number`)
}
else if(n<0){
    console.log(`${n} is a negative number`)
}
else{
    console.log("zero")
}

//6.Write a program to find the largest of two number
let a1 = 10;
let a2 = 20;
if(a1>a2){
    console.log(`${a1} is a largest number`)
}
else{
    console.log(`${a2} is a largest number`)
}

//7. Write a program to find the largest of three number.
let x = 55, y = 50, z = 15 ;
if(x>y && x>z){
    console.log(`${x} is a largest number`)
}
else if(y>z){
    console.log(`${y} is a largest number`)
}
else{
    console.log(`${z} is a largest number`)
}

//8. Write a program to find the sum of digits of a number.
// let dig=12345;
// let sum = 0;
// while(dig > 0){
//     sum =+ (dig%10)
//     num = Math.floor(dig/10);
// }
// console.log(`Sum = ${sum}`)

//9.Write a program to revese a number
// let dig = 123;
// let temp1 = dig;
// let rev = 0;

// while(dig>0) {
//     let rem;
// 			rem = temp1 % 10;
// 			rev = rev * 10 + rem;
// 			temp1 = Math.floor(dig /= 10);
// 		}
// console.log(rev);

//13.Write a program to print fibonacci series.
let d = 10;
let first = 0;
let second = 1;
for(let i = 0;i<d; i++){
    console.log(first)
    let next = first + second
    first = second
    second = next
}

//14. Write a program to print prime number
let p = 7;
let flag = true;
for(let i=2;i<p;i++){
    if(p%i==0){
        flag = false
        break
    }
}
if(flag == true){
    console.log(`${p} is prime no`)
}
else{
    console.log(`${p} is not prime no`)
}

//15. Write a program to print prime number from 1 to 100
// let flag1 = true;
// for(let j=2;j<=100;j++){
// for(let k=2;k<j;k++){
//     if(j%k==0){
//         flag = false
//         break
//     }
// }
// if(flag1 == true){
//     console.log(j)
// }
// }

//16.Write a program to find a number is amrstrong no.
function numofcount (num){
    let count = 0;
    while(num!=0){
        num = Math.floor(num/10)
        count++
    }
    return count
}
function isAmr(num){
    let count = numofcount(num)
    let sum = 0
    let temp2 = num
    while(temp2!=0){
        let dig = temp2 % 10
        sum = Math.pow(dig,count)
        temp2 = Math.floor(temp2/10)
    }
    return sum==num
}
console.log(isAmr(153))

