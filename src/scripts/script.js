$( document ).ready(function() {
  new WOW().init();
  
  $("#menu").click(function(){
    $("html").toggleClass("hidden-scroll");
  });
  $("#myNavbar .item-nav .title-nav").click(function (){
    $("html").removeClass("hidden-scroll");
  });

  // Cache selectors
  var lastId,
  topMenu = $("#myNavbar"),
  topMenuHeight = topMenu.outerHeight() + 50,
  topHeight = topMenu.outerHeight() - 1,

  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
      offsetTop = href == "#" ? 0  : $(href).offset().top - topHeight;
    $('html, body').stop().animate({ 
      scrollTop: offsetTop
    }, 500);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
    if ($(this).offset().top <= fromTop)
      return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
   
    if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active-menu")
         .end().filter("[href='#"+id+"']").parent().addClass("active-menu");
   }       
  });
   // menu
    var div = $('#header');
    var start = $(div).offset().top;
 
    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();
        $(div).css('position',((p)>start) ? 'fixed' : 'static');
        $(div).css('top',((p)>start) ? '0px' : '');
    });
 
 
   // responsive menu
   $(".navbar-toggle").click(function(){
     $(".icon-bar").toggleClass("close-menu");
     $(".nav-list").toggleClass("animate-menu");
   });
 
   $(function(){       
     var $win = $(window); 
     var $menu = $("#menu");
     $win.on("click.Bst", function(event){    
       if ( $menu.has(event.target).length == 0   && !$menu.is(event.target) ){
         $('.nav-list').removeClass("animate-menu");
         $(".icon-bar").removeClass("close-menu");
       }
     });
     
 });
  $(".slider").not('.slick-initialized').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
});