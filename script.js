$(document).ready(function(){
    $('.sidenav').sidenav();
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

console.log('oh hey there ( ͡° ͜ʖ ͡°)');