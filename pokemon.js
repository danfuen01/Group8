var spawnedPokemon = "";

function setupHandlers() {
	pokemonSpawn();
	checkHit();
	document.body.onkeyup = function(e){
    	if (e.keyCode === 32) {//if spacebar is pushed
       	 	pokeballFire();
    	}
	}
}

function catchPokemon(){
	console.log("sucess");
	$('#' + spawnedPokemon).hide();
}

function checkHit(){
	console.log("Called overlap")
	var rect1= {x: 0, y :550, width:50, height: 50}
	var rect2 = {x: 0, y: 550, width: 20, height: 20}
	var hit = false;
	if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
        hit = true;
    	console.log("HIT")
    }
}

	function pokeballFire(){
		var position = $('#' + spawnedPokemon).position()
		console.log(position.left);
		var halfway = (position.left - 10)/2;
		var halwayTime = ((halfway - 10)*3000)/1000;
		setTimeout(catchPokemon, halwayTime);
		

		var ball = document.getElementById("pokeball");
		// $('#pokeball').show();
		$("#pokeball").animate({left: "+=1000"}, 3000);
		// $('#pokeball').hide();
		// $('#pokeball').animate({left: "-=1000"}, 3000);

	}

function pokemonSpawn(){
	var pokemonIds = ["squirtle", "charmander", "bulbasaur"];
	var thisID = pokemonIds[Math.floor(Math.random() * (4))];//selects a random pokemon
	spawnedPokemon = thisID;
	console.log(thisID);
	// thisID.className = 'show';
    $("#" + thisID).animate({left: "-=1000"}, 3000);
};

$(document).ready(setupHandlers);