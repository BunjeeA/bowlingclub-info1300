const tournament_image_slides = $(".tournament_carousel_image");
const tournament_thum_overlay = $(".tournament_carousel_thum_overlay");

function nextSlide() {
  let nextNum = tournament_image_slides.index($(".tournament_carousel_image:not(.hidden)")) + 1 + 1;
  if (nextNum > tournament_image_slides.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = tournament_image_slides.index($(".tournament_carousel_image:not(.hidden)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = tournament_image_slides.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = tournament_image_slides.eq(index);
  let currentOverlay = tournament_thum_overlay.eq(index);

  tournament_image_slides.addClass("hidden")
  tournament_thum_overlay.removeClass("overlay")
  currentSlide.removeClass("hidden")
  currentOverlay.addClass("overlay")
}

$("#tournament_next").click(function() {
    nextSlide();
  });

$("#tournament_prev").click(function() {
    prevSlide();
  });

$("#tournament_1_thum").click(function() {
    tournament_image_slides.addClass("hidden")
    $("#tournament_1").removeClass("hidden")
    tournament_thum_overlay.removeClass("overlay")
    $("#tournament_1_thum_overlay").addClass("overlay")
  });

$("#tournament_2_thum").click(function() {
    tournament_image_slides.addClass("hidden")
    $("#tournament_2").removeClass("hidden")
    tournament_thum_overlay.removeClass("overlay")
    $("#tournament_2_thum_overlay").addClass("overlay")
  });

$("#tournament_3_thum").click(function() {
    tournament_image_slides.addClass("hidden")
    $("#tournament_3").removeClass("hidden")
    tournament_thum_overlay.removeClass("overlay")
    $("#tournament_3_thum_overlay").addClass("overlay")
  });

$("#tournament_4_thum").click(function() {
    tournament_image_slides.addClass("hidden")
    $("#tournament_4").removeClass("hidden")
    tournament_thum_overlay.removeClass("overlay")
    $("#tournament_4_thum_overlay").addClass("overlay")
  });

$("#tournament_5_thum").click(function() {
    tournament_image_slides.addClass("hidden")
    $("#tournament_5").removeClass("hidden")
    tournament_thum_overlay.removeClass("overlay")
    $("#tournament_5_thum_overlay").addClass("overlay")
  });

$("#tournament_next").hover(function() {
    $(this).children(":first-child").addClass("hidden");
    $(this).children(":nth-child(2)").removeClass("hidden");
  }, function() {
    $(this).children(":first-child").removeClass("hidden");
    $(this).children(":nth-child(2)").addClass("hidden");
  });

$("#tournament_prev").hover(function() {
    $(this).children(":first-child").addClass("hidden");
    $(this).children(":nth-child(2)").removeClass("hidden");
  }, function() {
    $(this).children(":first-child").removeClass("hidden");
    $(this).children(":nth-child(2)").addClass("hidden");
  });
