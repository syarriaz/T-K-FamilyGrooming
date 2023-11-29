/*
    Student Name: Sandra Arriaza and Ashley Cafiero
    File Name: script.js
    Date: 11/25/2023
*/

//jQuery for hero image to consume the header window space
$(document).ready(function () {
  $.get("/common/navbar.html", function(data) {
      $(".navbar-placeholder").html(data);

      // Add click event using jQuery for mobile menu
      $(document).on('click', '.hamburger', function() {
          $(this).toggleClass("active");
          $(".nav-menu").toggleClass("active");
      });
  });
});