$(document).ready(function() {
	// clean up variables
	// utilize jQuery i.e. var conor = $("#cmb");
    var conor = document.getElementById("cmb");
    var don = document.getElementById("dcb");
    var jon = document.getElementById("jjb");
    var andy = document.getElementById("asb");
    var octagon = false;
    var cFighters = [don, jon, andy];
    var jFighters = [conor, andy, don];
    var aFighters = [conor, jon, don];
    var dFighters = [jon, andy, conor];
    var allFighters = [conor, andy, jon, don];
    fighter1 = "";
    fighter2 = "";
    fighter3 = "";



    // /////////////////////////////////////conor///////////////////////////////
    
        $("#cmb").on("click", function() {  
        if (octagon===false){              
            $("#enemyQue").append(cFighters);
            $("#charSel").append(conor);
        }
        else(octagon===true)
        	$(don).on("click",function(){
        		$("#Octagon").append(don);

        	});
        $(jon).on("click",function(){
        		$("#Octagon").append(jon);

        	});
        $(andy).on("click",function(){
        		$("#Octagon").append(andy);

        	});
        });
    
    // /////////////////////////////////////andy///////////////////////////////

        $("#asb").on("click", function() {
        	if (octagon===false){ 
            $("#enemyQue").append(aFighters);
            $("#charSel").append(andy);
        }
          else(octagon===true)
        	$(don).on("click",function(){
        		$("#Octagon").append(don);

        	});
        $(jon).on("click",function(){
        		$("#Octagon").append(jon);

        	});
        $(conor).on("click",function(){
        		$("#Octagon").append(conor);

        	});
        });
    
    //  /////////////////////////////////////don///////////////////////////////

        $("#dcb").on("click", function() {
        	if (octagon===false){ 
            $("#enemyQue").append(dFighters);
            $("#charSel").append(don);
        }
          else(octagon===true)
        	$(conor).on("click",function(){
        		$("#Octagon").append(conor);

        	});
        $(jon).on("click",function(){
        		$("#Octagon").append(jon);

        	});
        $(andy).on("click",function(){
        		$("#Octagon").append(andy);

        	});
        });
    
  /////////////////////////////////jon///////////////////////////////

        $("#jjb").on("click", function() {
        	if (octagon===false){ 
            $("#enemyQue").append(jFighters);
            $("#charSel").append(jon);
        }
          else(octagon===true)
        	$(conor).on("click",function(){
        		$("#Octagon").append(conor);

        	});
        $(don).on("click",function(){
        		$("#Octagon").append(don);

        	});
        $(andy).on("click",function(){
        		$("#Octagon").append(andy);

        	});
        });
    


});

    ///////////////////////////////////sending fighter to octagon///////////////////////////




    // $("enemyQue").on("click", function(){
    // $("Octagon").append(".fighter");
    // console.log("working2");

    // });







// add images and dynamic words inside figher buttons
// after selecting character send other charcters to abailable opponents 
// after selecting opponent you can fight them
// add crystal code to specific fighters (add attack powers and counter powers)
// activitace button
// loop to pick new fighter if defeated or end game
