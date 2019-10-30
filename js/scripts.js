$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = function(year) {



      return false;
      };
      $("#result").text(result);


  });
});
