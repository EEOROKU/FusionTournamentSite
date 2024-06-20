//load window at top
window.onload = function() {
    window.scrollTo(0, 0);
}

//opens Navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.transform = "translateX(0)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.transform = "translateX(-100%)";
}

//carousel code
