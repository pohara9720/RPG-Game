$(document).ready(function() {
	// clean up variables
	// utilize jQuery i.e. var conor = $("#cmb");
    var conor = document.getElementById("cmb");
    var don = document.getElementById("dcb");
    var jon = document.getElementById("jjb");
    var andy = document.getElementById("asb");
    var cmHP= document.getElementById("cmhp");
    var dcHP= document.getElementById("dchp");
    var asHP= document.getElementById("ashp");
    var jjHP= document.getElementById("jjhp");
    var octagon = false;
    var cFighters = [don, jon, andy];
    var jFighters = [conor, andy, don];
    var aFighters = [conor, jon, don];
    var dFighters = [jon, andy, conor];
    var allFighters = [conor, andy, jon, don];
    var cmHP=200;
    var asHP=180;
    var dcHP=140;
    var jjHP=210;


// //////////////////////////////////Moving Fighters to Positions////////////////////////////////////////////////////////////
    

    // /////////////////////////////////////conor///////////////////////////////

$("#cmb").on("click", function() {
    if (octagon === false) {
        $("#enemyQue").append(cFighters);
        $("#charSel").append(conor);
        $("#cmhp").html(cmHP);
        $(conor).addClass(".fighterReady")
        octagon = true;
    }
    if (octagon === true) {

        $(don).on("click", function() {
            $("#Octagon").append(don);
            $("#dchp").html(dcHP);
            $(conor).addClass(".enemyReady")

        });
        $(jon).on("click", function() {
            $("#Octagon").append(jon);
            $("#jjhp").html(jjHP);
            $(conor).addClass(".enemyReady")

        });
        $(andy).on("click", function() {
            $("#Octagon").append(andy);
            $("#ashp").html(asHP);
            $(conor).addClass(".enemyReady")

        });
    };
});

    
    // /////////////////////////////////////andy///////////////////////////////

        $("#asb").on("click", function() {
        	if (octagon===false){ 
            $("#enemyQue").append(aFighters);
            $("#charSel").append(andy);
            $("#ashp").html(asHP);
            octagon= true;


        }
          if (octagon===true){
        	$(don).on("click",function(){
        		$("#Octagon").append(don);
        		  $("#dchp").html(dcHP);

        	});
        $(jon).on("click",function(){
        		$("#Octagon").append(jon);
        		$("#jjhp").html(jjHP);

        	});
        $(conor).on("click",function(){
        		$("#Octagon").append(conor);
        		$("#cmhp").html(cmHP);

        	});
    };
        });
    
    //  /////////////////////////////////////don///////////////////////////////

        $("#dcb").on("click", function() {
        	if (octagon===false){ 
            $("#enemyQue").append(dFighters);
            $("#charSel").append(don);
              $("#dchp").html(dcHP);
            octagon=true;
        }
          if(octagon===true){
        	$(conor).on("click",function(){
        		$("#Octagon").append(conor);
        		$("#cmhp").html(cmHP);

        	});
        $(jon).on("click",function(){
        		$("#Octagon").append(jon);
        		$("#jjhp").html(jjHP);

        	});
        $(andy).on("click",function(){
        		$("#Octagon").append(andy);
        		$("#ashp").html(asHP);

        	});
    };
        });
    
  /////////////////////////////////jon///////////////////////////////

        $("#jjb").on("click", function() {
        	if (octagon===false){ 
            $("#enemyQue").append(jFighters);
            $("#charSel").append(jon);
            $("#jjhp").html(jjHP);
            octagon=true;
        }
          if(octagon===true){
        	$(conor).on("click",function(){
        		$("#Octagon").append(conor);
        		$("#cmhp").html(cmHP);

        	});
        $(don).on("click",function(){
        		$("#Octagon").append(don);
        		  $("#dchp").html(dcHP);

        	});
        $(andy).on("click",function(){
        		$("#Octagon").append(andy);
        		$("#ashp").html(asHP);

        	});
    };
        });
    



//////////////////////////////////////////Fighting java//////////////////////////////////////////////////

// $("#attack").on("click",function(){
// 	if(".fighterReady"=conor){
// 		cmHP -10;
// 		dcHP-40;
// 		asHP-30;
// 		jjHP-15;
// 	}
// });



});





// add images and dynamic words inside figher buttons
// after selecting character send other charcters to abailable opponents 
// after selecting opponent you can fight them
// add crystal code to specific fighters (add attack powers and counter powers)
// activitace button
// loop to pick new fighter if defeated or end game
