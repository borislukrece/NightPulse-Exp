$(window).on("load", function () {
  $(".loader-container").fadeOut("slow");
});

$(document).ready(function () {
  $(".toggle-theme").click(function () {
    $("html").toggleClass("light dark");
  });
});
