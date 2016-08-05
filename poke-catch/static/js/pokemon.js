var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var username="newUser"

var spawnedPokemon = "";
var halfwayDistance = 0;
var pokemonIds = ["squirtle", "charmander", "bulbasaur", "pikachu"];
var score = 0;

// function drawScore() {
//     ctx.font = "16px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("Score: "+score, 8, 20);
// }

function setupHandlers() {
	$('#squirtle').hide();
	$('#bulbasaur').hide();
	$('#pikachu').hide();
	$('#charmander').hide();
	document.getElementById("score").innerHTML = score;
	pokemonSpawn();
	var position = $('#' + spawnedPokemon).position()
	document.body.onkeyup = function(e){
    	if (e.keyCode === 32) {//if spacebar is pushed
       	 	pokeballFire();
    	}else if (e.keyCode === 38){
    		ashJump();
    	}
	}
}

function pokemonSpawn(){
	setTimeout(pokemonTouch, 1860);
	var thisID = pokemonIds[Math.floor(Math.random() * (4))];//selects a random pokemon
	spawnedPokemon = thisID;
	console.log(thisID);
	$("#" + spawnedPokemon).show()
   	$("#" + thisID).animate({left: "-=2000"}, 3000);
   	 setTimeout(pokemonRespawn,3000);
   	 

}

function pokemonRespawn(){
	$("#" + spawnedPokemon).hide()
   	$("#" + spawnedPokemon).animate({left: "+=2000"}, 1);
   	setTimeout(pokemonSpawn, Math.floor(Math.random() * (300)));
   	

}


function ashJump(){
	$("#ash").animate({top: "-=300"}, 200);
	$("#pokeball").animate({top: "-=300"}, 200);
	$("#ash").animate({top: "+=300"}, 200);
	$("#pokeball").animate({top: "+=300"}, 200);
}

function pokeballFire(){
	$('#controls').hide();
	var position = $('#' + spawnedPokemon).position()
	console.log(position.left);
	halfwayDistance = (position.left - 10)/2;
	var halfwayTime = ((halfwayDistance - 10)*1900)/1550;
	setTimeout(catchPokemon, halfwayTime);
	var ball = document.getElementById("pokeball");
	$("#pokeball").animate({left: "+=1500"}, 1550);
	if(($("#" + spawnedPokemon).is(":visible"))){
		score++;
	}

	
}

function printScore(){
	document.getElementById("score").innerHTML = "Score: " + score;

}

function pokeballRespawn(){
	$("#pokeball").css('left', 30);
	$("#pokeball").show();
}

function catchPokemon(){
	console.log("caught pokenon")
	$('#' + spawnedPokemon).hide();
	$("#pokeball").stop();
	$('#pokeball').hide();
	console.log($('#pokeball'))
	pokeballRespawn();

	console.log(score);
	document.getElementById("score").innerHTML = score;
}

function pokemonTouch(){
	console.log("POKETOUCH");
	if($("#" + spawnedPokemon).is(":visible") && $("#ash").is(":visible")){
		console.log("POKETOUCH MAYBE HIT");
		console.log(spawnedPokemon);
		console.log(Math.ceil($("#ash").position()));
		if(Math.ceil($("#ash").position().top) === 550){
			console.log("HIT!");
			console.log(Math.floor($("#" + spawnedPokemon).offset().left - ($("#" + spawnedPokemon).offset().left) + 8));
			console.log(Math.ceil($("#ash").offset().left));
			if(($("#" + spawnedPokemon).offset().left - ($("#" + spawnedPokemon).offset().left)) + 8 === Math.ceil($("#ash").offset().left)){
				$('#gameOver').show();
				var current_link = $("#SaveScore").attr("href");
				$("#SaveScore").attr("href", current_link+"&score="+score) 
			
				$('#gameOver').animate({fontSize: 250},1500);
				$('#ash').hide();
				$('#pokeball').hide();
			}
		}else{
			score = score + 2;

			console.log(score);
			document.getElementById("score").innerHTML = score;
		}
	}
}

$(document).ready(setupHandlers);