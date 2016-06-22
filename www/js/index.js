var ViewPoartHeight = $( window ).height();
$("#page-1").css( "height", ViewPoartHeight + "px" );

var PageWidth = $( window ).width();
$(".welcome_logo").css( "width", (PageWidth-20) + "px" );

var margin = (ViewPoartHeight - PageWidth) / 2;
$(".welcome_logo").css( "margin-top", margin + "px" );

$(document).ready(function () {
    window.setTimeout(function () {
        location.href = "#page-2";
    }, 1500);
});


