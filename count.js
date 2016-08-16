var qf = new Firebase('https://burning-heat-2673.firebaseio.com/kufa/qu�llfrisch');

qf.on('value', function f(s) {
    $('#qfcounting').text(0 + s.val());
});

$('#btnqf').click(function() {
  qf.transaction(function(current_value) {
    return current_value + 1;
  });
});



var schluck = new Firebase('https://burning-heat-2673.firebaseio.com/kufa/schluck');

schluck.on('value', function f(s) {
    $('#schluckcounting').text(0 + s.val());
});

$('#btnschluck').click(function() {
  schluck.transaction(function(current_value) {
    return current_value + 1;
  });
});


$('#reset').click(function() {
    qf.set(0);
    schluck.set(0);

});

