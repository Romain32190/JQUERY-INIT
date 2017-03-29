$(document).ready(function(){
// Générer les débris.
	var x = $('#jeu').css("width");
	var y = $('#jeu').css("height");
	y = parseInt(y);
	x = parseInt(x);
	function pdebris(a) {
		for(var i = 0; i < a ; i++){
			var xp = Math.round(Math.random()* (x - 20));
			var yp = Math.round(Math.random()* (y - 20));
			var result = $('<p class="debris"></p>').css({ "top": xp , "left": yp })
			$("#jeu").append(result);
		};
	}
		pdebris(Math.round(Math.random()* 300));

	$("#jeu").mouseup(function () {
	//	$( '.debris' ).remove('.debris' );
		$("#jeu").appendTo('debris').remove();
	})
	
	});