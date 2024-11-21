$(".hamburger").click(function() {
    $(".hamburger").addClass("hidden");
    $(".logo").addClass("hidden");
    $("header p").addClass("hidden");
    $("main").addClass("hidden");
    $(".close_hamburger").removeClass("hidden");
    $(".mobile_nav").removeClass("hidden");
  });

$(".close_hamburger").click(function() {
    $(".hamburger").removeClass("hidden");
    $(".logo").removeClass("hidden");
    $("header p").removeClass("hidden");
    $("main").removeClass("hidden");
    $(".close_hamburger").addClass("hidden");
    $(".mobile_nav").addClass("hidden");
  });
