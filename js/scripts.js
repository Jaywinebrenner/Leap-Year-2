$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();


    var year = parseInt($("input#year").val());
    // unrefactored function aka the long way to do it.
    // var leapYear = function(year) {
    //   if (year % 100 === 0) {
    //     return false;
    // } else if (year % 4 === 0) {
    //   return true;
    // } else if (year % 400 === 0) {
    //   return true;
    // } else {
    //   return false;
    // }
    // };

    // refactored function.
    var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };

    var result = leapYear(year);
      $("#result").text(result);
  });
});
