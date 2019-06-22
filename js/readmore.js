function readmore() {
    var dots = document.getElementById("dots");
    var moretxt = document.getElementById("more");
    var btntxt = document.getElementById("readmorebtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btntxt.innerHTML = "Read More";
        moretxt.style.display = "none";
    } else {
        dots.style.display = "none";
        btntxt.innerHTML = "Read Less";
        moretxt.style.display = "inline";
    }
}

function readmore1() {
    var dots = document.getElementById("dots1");
    var moretxt = document.getElementById("more1");
    var btntxt = document.getElementById("readmorebtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btntxt.innerHTML = "Read More";
        moretxt.style.display = "none";
    } else {
        dots.style.display = "none";
        btntxt.innerHTML = "Read Less";
        moretxt.style.display = "inline";
    }
}

function readmore2() {
    var dots = document.getElementById("dots2");
    var moretxt = document.getElementById("more2");
    var btntxt = document.getElementById("readmorebtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btntxt.innerHTML = "Read More";
        moretxt.style.display = "none";
    } else {
        dots.style.display = "none";
        btntxt.innerHTML = "Read Less";
        moretxt.style.display = "inline";
    }
}