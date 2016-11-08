
var clicksneeded = new Firebase('https://clickerz-56bed.firebaseio.com/clicks_needed');
clicksneeded.on('value', function f(s) {
    $('#clicks_needed').text("Klicks benoetigt: " + s.val());
});


//RED SCORE
//
var red_score = new Firebase('https://clickerz-56bed.firebaseio.com/red_score');
red_score.on('value', function f(s) {
    $('#red_score').text("Score Red: " + s.val());
});
//

//BLUE SCORE
//
var blue_score = new Firebase('https://clickerz-56bed.firebaseio.com/blue_score');
blue_score.on('value', function f(s) {
    $('#blue_score').text("Score Blue: " + s.val());
});
//


//RED CLICKS
//
var redclicks = new Firebase('https://clickerz-56bed.firebaseio.com/red_clicks');

redclicks.on('value', function f(s) {
    $('#red_counting').text(0 + s.val());
});

$('#btnred_inc').click(function() {
  redclicks.transaction(function(current_value) {
    return current_value + 1;
  });
});

$('#btnred_dec').click(function() {
  redclicks.transaction(function(current_value) {
    return current_value - 1;
  });
});
//


//BLUE CLICKS
//
var blueclicks = new Firebase('https://clickerz-56bed.firebaseio.com/blue_clicks');

blueclicks.on('value', function f(s) {
    $('#blue_counting').text(0 + s.val());
});

$('#btnblue_inc').click(function() {
  blueclicks.transaction(function(current_value) {
    return current_value + 1;
  });
});

$('#btnblue_dec').click(function() {
  blueclicks.transaction(function(current_value) {
    return current_value - 1;
  });
});
//




// TIME END
//
var redtimeend = new Firebase('https://clickerz-56bed.firebaseio.com/red_time_end');
redtimeend.on('value', function f(s) {
    $('#red_time_end').text(0 + s.val());
});
var bluetimeend = new Firebase('https://clickerz-56bed.firebaseio.com/blue_time_end');
bluetimeend.on('value', function f(s) {
    $('#blue_time_end').text(0 + s.val());
});
//


// RESET FUNCTION
//

$('#reset').click(function() {

});
//
