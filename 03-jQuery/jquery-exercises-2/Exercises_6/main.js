// Write your solution here
$( "#green" ).mouseover(function() {
    $( "#text" ).css('color', 'green');
  });
  
  $( "#red" ).mouseover(function() {
    $( "#text" ).css('color', 'red');
  });
  
  $( "#blue" ).mouseover(function() {
    $( "#text" ).css('color', 'blue');
  });
  
  $( "#green, #red, #blue" ).mouseout(function() {
    $( "#text" ).css('color', 'black');
  });