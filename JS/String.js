let str = "JavaScript"
console.log(str)
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(5))
console.log(str.charCodeAt(3))
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))
console.log(str.includes("Mava"))
console.log(str.slice(1,5))
console.log(str.substring(2))
console.log(str.substr(2))

let str1 = "  Javascript is easy  "
console.log(str1)
console.log(str1.split(""))
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())

let email = "prajwal@gmail.com , manja@gmail.com "
console.log(email)
console.log(email.replace("gmail","outlook"))
console.log(email.replaceAll("gmail","outlook"))

let str2 = "prajwal@gmail.com"
console.log(str2)
console.log(str2.startsWith("praj"))
console.log(str2.endsWith(".in"))

let st1 = "Java"
let st2 = "Script"
console.log(st1.concat(st2))
console.log(st1.at(2))