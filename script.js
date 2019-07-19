console.log("hey, you're not supposed to be here");

var menu = document.getElementById('hamburger-menu');
menu.addEventListener('click', function(){
    var nav = document.getElementById('sidenav');
    nav.style.visibility = 'hidden';
});

function toggleNav(){
    var nav = document.getElementById('sidenav');
    
    if(nav.style.visibility === 'hidden'){
        nav.style.visibility = 'visible';
        nav.style.height = auto;
        nav.style.margin = 0;
        nav.style.padding = '4em 0 0 0';
    }
    else {
        nav.style.visibility = 'hidden';
        nav.style.height = 0;
        nav.style.margin = 0;
        nav.style.padding = 0;
    }
}