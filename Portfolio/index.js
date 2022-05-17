// const { default: transitions } = require("@material-ui/core/styles/transitions")

var menubtn = document.getElementById("menu-btn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

window.onload = function(){
    sideNav.style.display = "None"
}

menubtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.display = "block"
        sideNav.style.right = "0" 
        menu.src = "images/close.png"
        menubtn.style.backgroundColor = "rgba(235, 226, 60, 0.3)";

    }

    else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";
        menubtn.style.backgroundColor = "rgba(235, 226, 60, 1)";
    }
 
}