// Types of Events
// Click Events

//click
let btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',()=>{
    console.log("Btn Clicked")
})

//In built method of click
let h1=document.querySelector('h1')
console.log(h1)
h1.onclick=()=>{
    console.log("H1 Triggered")
}

