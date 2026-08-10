fetch('https://api.github.com/users')
.then((res) => {
    console.log(res);
    return res.json();
}).then((data) => {
    console.log(data);

    let gitUsers = document.getElementById('gitUsers');
    console.log(gitUsers);

    data.map((item) => {
        let box = document.createElement('aside');
        let image = document.createElement('img');
        image.src = item.avatar_url;
        let h3 = document.createElement('h3');
        h3.innerText = item.login;
        let linkTag = document.createElement('a');
        linkTag.href = item.html_url;
        let button = document.createElement('button');
        button.innerText = "Git hub link";
        gitUsers.appendChild(box);
        box.append(image, h3, linkTag);
        linkTag.appendChild(button);
    })
}).catch((err) => {
    console.log(err);
})

//Products API

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {

        data.map((item) => {
        let box = document.createElement('aside');
        let image = document.createElement('img');
        image.src = item.image;
        let id = document.createElement('p');
        id.innerText = item.id;
        let h3 = document.createElement('h3');
        h3.innerText = item.title;
        let p = document.createElement('p');
        p.innerText = item.category;
        products.appendChild(box);
        box.append(image, id, h3, p);
    })
}).catch((err) => {
    console.log(err);
})