window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("rocket").style.display = "block";
    } else {
        document.getElementById("rocket").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var rocketsound = document.getElementById('rocketsound');
    rocketsound.play();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}