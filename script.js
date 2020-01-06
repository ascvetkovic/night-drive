$(document).ready(function() {
  // variables
  $road = $(".road");
  $car = $(".car");
  $lights = $(".car img");
  let flag = true;

  const cars = ["./images/car_lights.png", "./images/car.png"];

  // keypress event
  $(document).on("keypress", function(e) {
    if (e.which == 13) {
      console.log(e.which);
      $($road).toggleClass("moveRight");
      $($car).toggleClass("suspension");
    }
  });

  $(document).on("keypress", function(e) {
    if (e.which == 119) {
      if (flag) {
        flag = false;
        $lights.attr("src", cars[0]);
      } else {
        flag = true;
        $lights.attr("src", cars[1]);
      }
    }
  });
});
