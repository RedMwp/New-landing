const menu = document.querySelector('img[alt=hamburger]');
const mainMenu = document.querySelector('nav');

var close = true;

function toggleMenu(e){
    if (close) {
        e.target.src = 'images/icon-close.svg';
        close = !close;
        mainMenu.style.display='block'
    } else if (!close) {
        e.target.src = 'images/icon-hamburger.svg';
        close = true;
        mainMenu.style.display = 'none'
    }
}

menu.onclick = function(e){
    toggleMenu(e)
}
mainMenu.onclick = function(e){
    if(close){
        close = false;
    }
}