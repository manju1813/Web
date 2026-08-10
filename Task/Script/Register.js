let myForm = document.querySelector('form');
console.log(myForm);

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputBox = document.querySelectorAll('input');
    console.log(inputBox);

    let formData = {};

    inputBox.forEach((input) => {
        formData[input.name] = input.value;
    });

    console.log(formData);

    localStorage.setItem('userDetails', JSON.stringify(formData));
    alert("User Registration Successful");

    window.location.href = './Login.html';
    console.log("Form Submitted");
});