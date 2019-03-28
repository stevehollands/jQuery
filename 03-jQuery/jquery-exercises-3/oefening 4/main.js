    $("#een").click(function(){
        $("#square").height("+=10");
        if ($('#square').height() > 100) {
            $('#square').height("10px");
        }
    });
    
    $('#twee').on('click', function () {
        $('#square').css('background-color', 'green');
    });

    $('#drie').on('click', function (){
        
        $('#square').css('background-color', 'gray')
    });

    $('#vier').on('click', function (){
        $("#square").hide();
    });

    $('#vijf').on('click', function (){
        $("#square").show();
    });