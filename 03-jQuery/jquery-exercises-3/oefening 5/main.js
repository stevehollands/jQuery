var r = document.getElementById("rect");
var left = 0;
var up = 0;

function move (e){

//down arrow

if (e.keyCode == 40) {
    up += 2;
    rect.style.top = (parseInt(up) + up) + "px" ;
    
}

// right arrow

if (e.keyCode == 39) {
    left += 2;
    rect.style.left = (parseInt(left) + left) + "px";
}

// left arrow

if (e.keyCode == 37) {
    left -= 2;
    rect.style.left = (parseInt(left) + left) + "px";
}
 
// top arrow 

if (e.keyCode == 38) {
    up -= 2;
    rect.style.top = (parseInt(up) + up) + "px" ;

}
}

document.onkeydown = move;