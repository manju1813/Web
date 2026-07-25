// // Objects

// let student={
//     stdId:101,
//     stdName:"Manju",
//     stdAge:22,
//     stdAddress:"Hunsur"
// }
// console.log(student)
// console.log(student.stdId)
// console.log(student.stdName)
// console.log(student.stdAge)
// console.log(student.stdAddress)

// //Adding a new property

// student.stdCourse="Java Full Stack"
// console.log(student)

// //Deleting a property

// delete student.stdId
// console.log(student)

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

// //Freeze 

// //Cannot add,update ,delete

// Object.freeze(student)
// console.log(Object.isFrozen(student))

// //Cannot add and delete but can update

// Object.seal(student)
// console.log(Object.isSealed(student))

// //Object assign - It is used to merge 2 objects

let student={
    stdId:101,
    stdName:"Manju"
}
let stdAddress={
    city:"Mysore",
    state:"Karnataka",
    pincode:571105
}
console.log(Object.assign(student,stdAddress))