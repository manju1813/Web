// Array Programs

// 1.Find largest Element in Array

let arr=[40,10,55,20,28,16]
console.log(arr.length)
let sortedArray=arr.sort((a,b)=>a-b)
console.log(sortedArray[5])

// 2.Find Smallest element in array

let arr1=[40,10,55,20,28,16]
console.log(arr1.length)
let sortedArray1=arr1.sort((a,b)=>a-b)
console.log(sortedArray1[0])

// 3.Find 2nd largest Element in Array

let arr2=[40,10,55,20,28,60,16]
console.log(arr2.length)
let sortedArray2=arr2.sort((a,b)=>a-b)
console.log(sortedArray2[5])


// 4.Find Sum Of array elements

let arr3=[50,40,30,10,20]
let sum=0
for(let i of arr3){
    sum=sum+i
}
console.log(sum)

// 5.Remove Duplicate Elements

let arr4=[50,40,30,10,10,20,30]
console.log(arr4)
console.log(...new Set(arr4))

// 6.Find Even Numbers From Array

let arr5=[10,20,25,35,40]
console.log(arr5)
for(let i of arr5){
    if(i%2==0){
        console.log(i)
    }
}

//Or

let arr6=[10,20,25,35,40]
console.log(arr6.filter((num)=>num%2==0))

// 7.Find Common Elements in two Arrays

// 8.Find Frequency of Array Elements

