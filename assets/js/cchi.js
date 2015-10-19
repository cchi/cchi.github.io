/*
 * Sidebar toggle function 
 */

(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);

/*
 * Scroll to top button
 */
jQuery(document).ready(function($){
  
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.wc-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('wc-is-visible') : $back_to_top.removeClass('wc-is-visible wc-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('wc-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});