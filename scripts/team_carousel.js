const team_image_slides = $(".team_carousel_image");
const team_thum_overlay = $(".team_carousel_thum_overlay");

function nextTeamSlide() {
  let nextTeamNum = team_image_slides.index($(".team_carousel_image:not(.hidden)")) + 1 + 1;
  if (nextTeamNum > team_image_slides.length) {
    nextTeamNum = 1;
  }
  showTeamSlide(nextTeamNum);
}

function prevTeamSlide() {
  let prevTeamNum = team_image_slides.index($(".team_carousel_image:not(.hidden)")) - 1 + 1;
  if (prevTeamNum <= 0) {
    prevTeamNum = team_image_slides.length;
  }
  showSlide(prevTeamNum);
}

function showTeamSlide(TeamNum) {
  let TeamIndex = TeamNum - 1;
  let currentTeamSlide = team_image_slides.eq(TeamIndex);
  let currentTeamOverlay = team_thum_overlay.eq(TeamIndex);

  team_image_slides.addClass("hidden")
  team_thum_overlay.removeClass("overlay")
  currentTeamSlide.removeClass("hidden")
  currentTeamOverlay.addClass("overlay")
}

$("#team_next").click(function() {
    nextTeamSlide();
  });

$("#team_prev").click(function() {
    prevTeamSlide();
  });

$("#team_1_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_1").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_1_thum_overlay").addClass("overlay")
  });

$("#team_2_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_2").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_2_thum_overlay").addClass("overlay")
  });

$("#team_3_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_3").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_3_thum_overlay").addClass("overlay")
  });

$("#team_4_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_4").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_4_thum_overlay").addClass("overlay")
  });

$("#team_5_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_5").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_5_thum_overlay").addClass("overlay")
  });

$("#team_6_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_6").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_6_thum_overlay").addClass("overlay")
  });

$("#team_7_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_7").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_7_thum_overlay").addClass("overlay")
  });

  $("#team_8_thum").click(function() {
    team_image_slides.addClass("hidden")
    $("#team_8").removeClass("hidden")
    team_thum_overlay.removeClass("overlay")
    $("#team_8_thum_overlay").addClass("overlay")
  });

$("#team_next").hover(function() {
    $(this).children(":first-child").addClass("hidden");
    $(this).children(":nth-child(2)").removeClass("hidden");
  }, function() {
    $(this).children(":first-child").removeClass("hidden");
    $(this).children(":nth-child(2)").addClass("hidden");
  });

$("#team_prev").hover(function() {
    $(this).children(":first-child").addClass("hidden");
    $(this).children(":nth-child(2)").removeClass("hidden");
  }, function() {
    $(this).children(":first-child").removeClass("hidden");
    $(this).children(":nth-child(2)").addClass("hidden");
  });
