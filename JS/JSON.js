let person = {
"pName" : "Ajith Kumar",
"pAge" : 23,
"pAddress": "Mysore",
"pPhone" : 9876543210
}
console.log(person)

let jsonobj = JSON.stringify(person)
console.log(jsonobj)
let regularObj = JSON.parse(jsonobj)
console.log(regularObj)