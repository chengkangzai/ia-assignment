function check(form) {
    if (form.userid.value == "admin" && form.password.value == "admin") {
        window.open("TBC.html")
    } else {
        alert("Username or Password entered are wrong.\nTry login with \" username:admin, password:admin \"")
    }


}