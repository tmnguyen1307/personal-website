window.onscroll = function() {navBarStick()};

var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;

function navBarStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "#ffffff";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.removeProperty('background-color');
  }
}

function showLink() {
    var nav = document.getElementById("topnav");
    if (nav.className === "navbar") {
      nav.className += " responsive";
    } else {
      nav.className = "navbar";
    }
}
