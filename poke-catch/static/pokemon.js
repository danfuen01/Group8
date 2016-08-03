var spawnedPokemon = "";
var halfwayDistance = 0;
var pokemonIds = ["squirtle", "charmander", "bulbasaur", "pikachu"];
var score = 0;
var highscore = 0;

function setupHandlers() {
	$('#gameOver').hide();
	$('#squirtle').hide();
	$('#bulbasaur').hide();
	$('#pikachu').hide();
	$('#charmander').hide();
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
		// thisID.className = 'show';
   	$("#" + thisID).animate({left: "-=2000"}, 3000);
  	// setTimeout(pokemonSpawn, Math.floor(Math.random() * (2000)))
   	 // }
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
	$('h1').hide();
	var position = $('#' + spawnedPokemon).position()
	console.log(position.left);
	halfwayDistance = (position.left - 10)/2;
	var halfwayTime = ((halfwayDistance - 10)*1900)/1550;
	setTimeout(catchPokemon, halfwayTime);
	var ball = document.getElementById("pokeball");
	$("#pokeball").animate({left: "+=1500"}, 1550);
	
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
	// score = score + 1;
}

function pokemonTouch(){
	if(($("#" + spawnedPokemon).is(":visible"))){
		console.log(spawnedPokemon);
		if($("#ash").position().top === 550){
			if($("#" + spawnedPokemon).offset().left - ($("#" + spawnedPokemon).offset().left) + 8 === $("#ash").offset().left){
				$('#gameOver').show();
				$('#gameOver').animate({fontSize: 200},1500);
				$('#ash').hide();
				$('#pokeball').hide();
			}
		}
		}
	}

$(document).ready(setupHandlers);