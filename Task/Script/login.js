let myForm = document.querySelector('form');
console.log(myForm);

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    console.log(email, pass);

    let storedData = JSON.parse(localStorage.getItem('userDetails'));
    console.log(storedData);

    if (storedData) {
        if (email === storedData.email && pass === storedData.password) {
            alert("Login Successful");
            window.location.href = './HomePage.html';
        } else {
            alert("Invalid Email or Password");
        }
    } else {
        alert("No user registered. Please register first.");
    }

    console.log("Form Submitted");
});