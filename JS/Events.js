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

// dbclick

btn.ondblclick=()=>{
    console.log("Db click Triggered")
}

h1.addEventListener('dblclick',()=>{
    console.log("H1 triggered by dblclick")
})

// Mouse Events

let btn1=document.querySelector('#button1')
console.log(btn1)

btn1.addEventListener('mouseover',()=>{
    console.log("Mouse Over Triggered")
})

btn1.addEventListener('mouseout',()=>{
    console.log("Mouse out Triggered")
})

// In built method for Mouse out
// btn1.onmouseover=()=>{
//     console.log("Mouse Over Triggered")
// }

// In built method for Mouse out
// btn1.onmouseout=()=>{
//     console.log("Mouse Out Triggered")
// }

let h3=document.querySelector('h3')
console.log(h3)

h3.addEventListener('mouseover',()=>{
    console.log("Mouse Over Triggered")
})

h3.onmouseout=()=>{
    console.log("Mouse Out Triggered")
}
 // Keyboard events
let input=document.querySelector('input')
console.log(input)

input.addEventListener('keydown',(e)=>{
    console.log(e.key,"key down")
})

// in built method for key up
input.onkeyup=(e)=>{
    console.log(e.key,"key up")
}

// input event
input.addEventListener('input',(e)=>{
    console.log(e.target.value)
})