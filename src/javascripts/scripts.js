// Add your scripts here
document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE MENU NAV
    var menubutton = document.querySelector('.menu-button');
    var mainnav = document.querySelector('.mainnav');
    menubutton.onclick = function () {
        menubutton.classList.toggle("expanded");
        mainnav.classList.toggle("expanded");
    }

});