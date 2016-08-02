var spawnedPokemon = "";


function setupHandlers() {
	pokemonSpawn();
	document.body.onkeyup = function(e){
    	if (e.keyCode === 32) {//if spacebar is pushed
       	 	pokeballFire();
    	}else if (e.keyCode === 38){
    		ashJump();
    	}
	}

}

function catchPokemon(){
	console.log("sucess");
	$('#' + spawnedPokemon).hide();
	document.getElementById("pokeball").style.left(10 + 'px');
}

function ashJump(){
	$("#ash").animate({top: "-=300"}, 200);
	$("#ash").animate({top: "+=300"}, 200);
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

	ballCounter++;
}

function pokemonSpawn(){
	var pokemonIds = ["squirtle", "charmander", "bulbasaur"];
	var thisID = pokemonIds[Math.floor(Math.random() * (4))];//selects a random pokemon
	spawnedPokemon = thisID;
	console.log(thisID);
	// thisID.className = 'show';
    $("#" + thisID).animate({left: "-=2000"}, 3000);
}


$(document).ready(setupHandlers);