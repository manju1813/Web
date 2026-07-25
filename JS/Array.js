let arr=[10,20,30,40,50]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach((ele)=>{
//     console.log(ele)
// })

// arr.map((sui)=>{
//     console.log(sui)
// })

let arr1=[10,20,30]
console.log(arr1)
console.log(arr1.length)

//push
arr1.push(40) //to add an array element at last
console.log(arr1)

arr1.pop() //to delete an array element at last
console.log(arr1)

arr1.unshift(5) // to add an array element at first
console.log(arr1)

arr1.shift() //to delete an array element at first
console.log(arr1)

//slice
let arr2 = [10,20,30,40,50]
let arr3 = [60,70]
console.log(arr2.slice(1,3))

console.log(arr2.includes(60))
console.log(arr2.indexOf(30))
console.log(arr2.lastIndexOf(10))
console.log(arr2.concat(arr3))

//Ascending & descending order
let arr4=[15,25,7,10,1,28,99]
console.log(arr4)

console.log(arr4.sort((a,b)=>a-b))
console.log(arr4.sort((a,b)=>b-a))

//Filter
console.log(arr.filter((num)=>num>15))