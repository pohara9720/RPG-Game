$(document).ready(function() {

var fal=false;


////moves characters to select and enemyque
$(".mma").click(function(){
  $("#charSel").append(this);
  $(this).removeClass("mma").addClass("fighterReady");
  $(".mma").removeClass("mma").addClass("enemy");
  $(".enemy").removeClass("fighterReady");
  $("#enemyQue").append($(".enemy"));
  $(".enemy").click(function(){
  $("#Octagon").append(this);
  $(this).addClass("enemyReady")
console.log(this);

});


});
///////////////Attack button turns string to number and reassigns class to write in html//
$("#attack").click(function(){
$(".fighterReady span").addClass("fightHP");
var attack= $(".fighterReady span").text();
console.log($(".fighterReady span").text());
parseFloat($(".fighterReady span").text());

$(".enemyReady span").addClass("enemyHP");
var damage= $(".enemyReady span").text();
console.log($(".enemyReady span").text());
parseFloat($(".enemyReady span").text());


$(".fightHP").html(attack -= 15);
$(".enemyHP").html(damage - 30);


if (attack <= 0){
  alert("You've been KO'd");
}
if (damage <= 0){
  $(".enemyReady").fadeOut(".enemyReady");
}

});




});




