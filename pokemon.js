

function setupHandlers() {
	pokemonSpawn();
	checkHit();
	document.body.onkeyup = function(e){
    	if (e.keyCode === 32) {//if spacebar is pushed
    		
       	 	pokeballFire();
       	 	

    	}
	}
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

		var ball = document.getElementById("pokeball");
		var pos = 60;
		var id = setInterval(frame,5);
		function frame() {
			document.getElementById("pokeball").className = 'show';//pokeball appears
			if(pos == 1450){
				clearInterval(id);
			}else{
				pos++;
				ball.style.left = pos + 'px';//changes pokeball position
			}
		}

	}

function pokemonSpawn(){
	var pokemonIds = ["squirtle", "charmander", "bulbasaur"];
	var thisID = pokemonIds[Math.floor(Math.random() * (4))];//selects a random pokemon
	console.log(thisID);
	// thisID.className = 'show';
    $("#" + thisID).animate({left: "-=1000"}, 3000);
};


$(document).ready(setupHandlers);