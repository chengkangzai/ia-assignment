function check(form) {
    if (form.userid.value == "admin" && form.password.value == "admin") {
        window.open("A_backend.html")
    } else {
        alert("Username or Password entered are wrong.\nTry login with \" username:admin, password:admin \"")
    }


}