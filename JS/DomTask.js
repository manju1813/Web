console.log(document.body)
let h1=document.createElement('h1')
h1.innerText="Dom Properties"
document.body.appendChild(h1)


let ol=document.createElement('ol')
ol.innerHTML=`
        <li>createElement()</li>
        <li>append()</li>
        <li>appendChilad()</li>
        <li>innerText</li>
        <li>innerHtml</li>
`
document.body.appendChild(ol)

let h2=document.createElement('h2')
h2.innerText="Dom Methods"
document.body.appendChild(h2)

let ul=document.createElement('ul')
ul.innerHTML=`
<ul>
        <li>getElementById()</li>
        <li>getElementByClassName()</li>
        <li>getElementByTagName()</li>
        <li>querySelector</li>
        <li>querySelectorAll</li>
    </ul>
`
document.body.appendChild(ul)