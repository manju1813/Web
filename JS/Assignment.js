// 1. Add Two Numbers Using Arithmetic Operators
let a = 10;
let b = 20;

let sum = a + b;
console.log("Sum = ", sum);

// 2. Find the Remainder When One Number is Divided by Another.
let d = 25;
let e = 4;

console.log("Remainder = ", d%e);

//3. Swap Two Numbers Without Using a Third Variable
let a1 = 10;
let b1 = 20;

console.log("Before Swap:", a1, b1);

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("After Swap:", a1, b1);

// 4. Check Whether a Number is Even or Odd Using the Ternary Operator.
let num = 15;

let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(num," is ",result);

// 5. Check Whether a Person is Eligible to Vote Using an If Statement.
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// 6. Find the Larger of Two Numbers Using if...else.
let x = 25;
let y = 18;

if (x > y) {
    console.log(x + " is larger");
} 
else {
    console.log(y + " is larger");
}

// 7. Determine Whether a Number is Positive, Negative, or Zero.
let num1 = -5;

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 8. Print Numbers from 1 to 10 Using a for Loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 9. Print Numbers from 10 to 1 Using a while Loop.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// 10. Print the Multiplication Table of a Given Number.
let mul = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${mul} x ${i} = ${mul * i}`);
}