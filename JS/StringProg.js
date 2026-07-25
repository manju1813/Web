//String
// 1.Reverse  a string

let str="JavaScript"
console.log(str)
console.log(str.split(' ').reverse().join(''))
// for(let i=str.length-1;i>=0;i--){
//     rev=rev+str[i]
// }
// console.log(rev)

// 2.Check Palindrome String

let str1="madam"
let rev=str.split(' ').reverse().join('')
if(str===rev){
    console.log("Palindrome")

}else{
    console.log("Not Palindrome")
}

// 3.Count Vowels in a String

let str3="Programming"
let count=0
for(let char of str.toLowerCase()){
    if(`aeiou`.includes(char)){
        count++
    }
}
console.log(`No of vowels: ${count}`)

// 4.Remove Spaces From String

let str4="JavaScript is a Programming Language"
console.log(str4.split(' ').join(''))

// 5.Count words in a string

let str5="JavaScript is a Programming Language"
console.log(str5.split(" ").length)

// 6.Convert First Letter to Uppercase

let myName='manju'
let char=myName[0].toUpperCase()
console.log(char+myName.substring(1))