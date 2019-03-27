$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $('li:first-child').click(function(){ 
        $('#content').css('font-size','120%' );
        
    });
    
    /* On click: Decrease the font size (80%) */
    $('li:nth-child(2)').click(function(){
        $('#content').css('font-size','80%')

    });

    
    /* On click: Bold or normalize the green words */
     $('li:nth-child(3)').click(function(){
        
     $('.green').toggleClass('bold')});
    
   
    /* Click here to underline or normalize the words in red */

    $('li:nth-child(4)').click(function(){
    
        $('.red').toggleClass('underline');
    
    });

    
    /* On click: Replace the logo with another image */
    $('li:nth-child(5)').hover(function () {
            // over
            $('img').attr('src',"images/koala.jpg");
    
        }, function () {
            // out
            $('img').attr('src',"images/jquery-logo.png");
      });
        
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $('a').mouseover(function(){
        $(this).attr('title', $(this).attr('href'));
      });
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $('li:nth-child(7)').one('click', function() {
        $("h2").first().prepend("Chapter 1: ");
        $("h2:eq(1)").prepend("Chapter 2: ");
    });    

});
 