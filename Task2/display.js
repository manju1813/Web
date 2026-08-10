let form = document.querySelector("form");

let i = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = {};

    // Collect all input values
    let input = document.querySelectorAll("input");
    input.forEach((ele) => {
        data[ele.name] = ele.value;
    });

    // Collect textarea value
    let address = document.querySelector("textarea");
    data[address.name] = address.value;

    // Append row to table body
    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.Age}</td>
            <td>${data.phone}</td>
            <td>${data.address}</td>
        </tr>
    `;

    // Reset form after submission
    form.reset();
});