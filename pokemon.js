function setupHandlers() {
	document.body.onkeyup = function(e){
    	if (e.keyCode === 32) {

       	 	pokeballFire();
       	 	overlap();

    	}
	}
}

function pokeballFire(){

	var ball = document.getElementById("pokeball");
	var pos = 60;
	var id = setInterval(frame,5);
	function frame() {
		document.getElementById("pokeball").className = 'show';
		console.log("called this")
		if(pos == 2000){
			clearInterval(id);
		}else{
			pos++;
			// ball.style.top = pos + "px";
			ball.style.left = pos + 'px';
		}
	}

}

function overlap(){
	console.log("called overlap");
	var hit = false;
	while(!hit){
		if (pokeball.x < pokemon.x + pokemon.width &&
   pokeball.x + pokeball.width > pokemon.x &&
   pokeball.y < pokemon.y + pokemon.height &&
   pokeball.height + pokeball.y > pokemon.y) {
			console.log("They intersected")
			hit = true
	}
}
}

$(document).ready(setupHandlers);