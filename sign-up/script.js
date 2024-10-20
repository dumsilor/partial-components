function onSubmit(event) {
    event.preventDefault();
    let userName = document.getElementById("demo-input").value;
    let password = document.getElementById("demo-pass").value;
    if (userName === "demo" && password === "demo") {
        console.log(userName)
        document.querySelector(".login-msg").classList.remove('hide');
        document.querySelector(".login-msg").innerHTML = "Login Success";
        document.querySelector(".login-msg").style.backgroundColor = "green";
    } else {
        document.querySelector(".login-msg").classList.remove('hide');
        document.querySelector(".login-msg").innerHTML = "Login Failed";
        document.querySelector(".login-msg").style.backgroundColor = "red";
    }
    setTimeout(() => {
        document.querySelector(".login-msg").style.display = "none"
        document.querySelector(".login-msg").classList.add('hide');
    }, 3000)
}