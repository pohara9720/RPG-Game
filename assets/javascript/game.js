$(document).ready(function(){
var conor = document.getElementById("cmb");
var don = document.getElementById("dcb");
var jon = document.getElementById("jjb");
var andy = document.getElementById("asb");
var octagon=true;
var fighters=["Conor", "Donald", "Jon", "Anderson"];


/////////////////////////////////////picking a fighter///////////////////////////////
function select(){
	$("#cmb").on("click", function(){
 	$("#enemyQue").append(jon,andy,don);

});
	$("#asb").on("click", function(){
 	$("#enemyQue").append(jon,conor,don);
});
	$("#dcb").on("click", function(){
 	$("#enemyQue").append(jon,andy,conor);
});
	$("#jjb").on("click", function(){
 	$("#enemyQue").append(conor,andy,don);
});

};

$(".fighter").on("click", function(){
select();
console.log("working");

});


});





// add images and dynamic words inside figher buttons
// after selecting character send other charcters to abailable opponents 
// after selecting opponent you can fight them
// add crystal code to specific fighters (add attack powers and counter powers)
// activitace button
// loop to pick new fighter if defeated or end game 


