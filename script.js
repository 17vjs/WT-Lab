$(function(){

$("p").css("background-color", "red");
$("button").click(function(){
 $("p").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
});
});
