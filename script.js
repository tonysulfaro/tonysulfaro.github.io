console.log("hey, you're not supposed to be here");

var toggleCount = 0;

// var hamburger = document.getElementById('hamburger-icon');
// hamburger.addEventListener('click', toggleNav());

function toggleNav() {

    console.log('toggling nav');
    toggleCount ++;

    var nav = document.getElementById('mobile-sidenav');
    console.log(nav);

    // not collapsed yet
    if(nav.style.visibility == 'hidden' | toggleCount === 1){
        nav.style.visibility = 'visible';
        nav.style.margin = 0;
        nav.style.padding = '4em 0 2em 0';
        nav.style.height = '100%';
    }
    // collapse elements
    else{
        nav.style.visibility = 'hidden';
        nav.style.margin = 0;
        nav.style.padding = 0;
        nav.style.height = 0;
    }
}