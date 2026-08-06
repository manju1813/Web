// Methods
//ID
let h1Tag=document.getElementById('head1')
console.log(h1Tag)
h1Tag.style.backgroundColor="red"

let h2=document.getElementById('head2')
console.log(h2)
h2.style.color="red"

let h2Tag=document.getElementById('head3')
console.log(h2Tag)
h2Tag.style.backgroundColor="black"
h2Tag.style.color="red"

//className

let p=document.getElementsByClassName('para1')
console.log(p)

console.log(p[0])
console.log(p[1])
console.log(p[2])

for(let i=0;i<p.length;i++){
    console.log(p[i])
    p[i].style.color="red"
    p[i].style.backgroundColor="black"
}

//tagName
let pTag=document.getElementsByTagName('p')
console.log(pTag)

for(let i=0;i<pTag.length;i++){
    console.log(pTag[i])
    pTag[i].style.color="red"
    pTag[i].style.backgroundColor="black"
}

// querySelector()
let h3=document.querySelector('#head4')
console.log(h3)
h3.style.color="red"

let h4=document.querySelector('#head5')
console.log(h4)
h4.style.color="red"
h4.style.backgroundColor="black"

// querySelectorAll()
let p1=document.querySelectorAll('p')
console.log(p1)

let section=document.querySelectorAll('.box')
console.log(section)

section.forEach((ele)=>{
ele.style.height="100px"
ele.style.width="100px"
ele.style.border="1px solid red"
})

