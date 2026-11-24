
function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = document.getElementById("error");

    if (name == "" || email == "" || password == "") {
        error.innerHTML = "All fields are required";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Enter a valid email";
    }

    else if (password.length < 6) {
        error.innerHTML = "Password must contain at least 6 characters";
    }

    else {
        error.style.color = "green";
        error.innerHTML = "Registration Successful!";
    }
}

function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let error = document.getElementById("loginError");

    if (email == "" || password == "") {
        error.innerHTML = "Please fill all fields";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Enter a valid email";
    }

    else if (password.length < 6) {
        error.innerHTML = "Password must contain at least 6 characters";
    }

    else {
        error.style.color = "green";
        error.innerHTML = "Login Successful!";
    }
}
