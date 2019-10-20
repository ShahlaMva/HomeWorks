var elem = document.querySelector("body")

var cub = document.querySelector(".cub")

var topp = 0;
var leftt = 0;

var elemHeight=elem.offsetHeight;
var elemWidth=elem.offsetWidth;
var cubWidth=cub.offsetWidth;
var cubHeight=cub.offsetHeight;

document.body.addEventListener("keyup", function (ev) {

 if (ev.which == 39 && leftt<elemHeight-cubHeight) {
        leftt += 8;
    }
    if (ev.which == 37 && leftt > 0) {
        leftt -= 8;
    }
    if (ev.which == 40 && topp < elemWidth-cubWidth) {
        topp += 8;
    }
    if (ev.which == 38 && topp > 0) {
        topp -= 8;
    }

    cub.style.left = leftt + "px"
    cub.style.top = topp + "px"


})
