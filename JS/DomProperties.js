console.log("hii")
console.log(document.body)

// DOM Properties

// createElement

let h1=document.createElement('h1')
console.log(h1)
h1.innerText="Heading 1"
document.body.appendChild(h1)

let p=document.createElement('p')
console.log(p)
p.innerText="ewvckhuvgcvewcvkhqervxhu3evcxh3dxtku3evdxyu"
document.body.appendChild(p)

let section=document.createElement('section')
console.log(section)
document.body.appendChild(section)

let h2=document.createElement('h2')
h2.innerText="Heading 2"
console.log(h2)

let pTag=document.createElement('p')
pTag.innerText="Heading 2 comes under heading tags of html"
console.log(pTag)
section.append(h2,pTag)

let aside=document.createElement('aside')
console.log(aside)
document.body.appendChild(aside)

aside.innerHTML=`
<table border="2">
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
        </tr>
    </table>
    `
    console.log(document.body)