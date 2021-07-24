
// Open when someone clicks on the span element
// function openNav() {
//     document.getElementById("myNav").style.height = 100% 
//     document.getElementById('navBtn').addEventListener('click', openNav())
// };

// Closes nav when close button is clicked
// function closeNav() {
//     document.getElementById("myNav").style.height = 0% 
//     document.getElementById("navBtn").addEventListener('click', closeNav())
// };

function navBtn() {
    document.getElementById("myDropDown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) {
        var dropdown = document.getElementsByClassName('overlay-content');
        var i;
        for (i = 0; i < dropdown.length; i++) {
            var openDropDown = dropdown[i];
            if (openDropDown.classList.contains('show')) {
                openDropDown.classList.remove('show');
            }
        }
    }
}