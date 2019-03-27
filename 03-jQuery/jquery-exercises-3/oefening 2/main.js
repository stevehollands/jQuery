let counter = 0;

$("#plus").click(function() {
    counter++;
    $("p").html(counter);
});

$("#min").click(function() {
    counter--;
    $("p").html(counter);
});
