
var spawnedPokemon = "";

function setupHandlers() {
	pokemonSpawn();
	var position = $('#' + spawnedPokemon).position()
	setTimeout(pokemonTouch, 1860);
	document.body.onkeyup = function(e){
    	if (e.keyCode === 32) {//if spacebar is pushed
       	 	pokeballFire();
    	}else if (e.keyCode === 38){
    		ashJump();
    	}
	}
}

function pokemonSpawn(){
	var pokemonIds = ["squirtle", "charmander", "bulbasaur", "pikachu"];
	var thisID = pokemonIds[Math.floor(Math.random() * (5))];//selects a random pokemon
	spawnedPokemon = thisID;
	console.log(thisID);
	// thisID.className = 'show';
    $("#" + thisID).animate({left: "-=2000"}, 3000);

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
	var halfway = (position.left - 10)/2;
	var halwayTime = ((halfway - 10)*1900)/1500;
	setTimeout(catchPokemon, halwayTime);
		

	var ball = document.getElementById("pokeball");
	$("#pokeball").animate({left: "+=1000"}, 1500);
}

function catchPokemon(){
	$('#' + spawnedPokemon).stop();
	console.log("sucess");
	console.log($("#" + spawnedPokemon).offset().left);
	console.log($("#pokeball").offset().left);
	$('#' + spawnedPokemon).hide();

	document.getElementById("pokeball").style.left =10;
}

function pokemonTouch(){
	if($("#" + spawnedPokemon).offset().left - ($("#" + spawnedPokemon).offset().left) + 8 === $("#ash").offset().left){
		console.log("Game Over");
		$('#ash').hide();
		$('#pokeball').hide();
	}
}

$(document).ready(setupHandlers);
