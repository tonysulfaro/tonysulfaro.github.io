console.log("hey, you're not supposed to be here");

var toggleCount = 0;

document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        toggleNav();
    }
}, false);

function toggleNav() {

    toggleCount++;

    var nav = document.getElementById('mobile-sidenav');

    // not collapsed yet
    if (nav.style.visibility == 'hidden' | toggleCount === 1) {
        nav.style.visibility = 'visible';
        nav.style.margin = '4px 0 0 0';
        nav.style.padding = '0 0 2em 0';
        nav.style.height = '600px';
    }
    // collapse elements
    else {
        nav.style.visibility = 'hidden';
        nav.style.margin = 0;
        nav.style.padding = 0;
        nav.style.height = 0;
    }
}