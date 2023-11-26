/*Student Names: Sandra Arriaza and Ashley Cafiero
Today's Date: 11/25/2023
File Name: script.js
*/

//Hamburger menu function

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
