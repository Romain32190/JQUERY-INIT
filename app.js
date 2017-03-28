$( document ).ready(function() {

	var aimantActif = false;



	$("#jeu").click(function(){
		aimantActif = !aimantActif;
		console.log(aimantActif);
	});


	function point(l){
		var widht = $("#jeu").css("widht");
		var heigth = $("#jeu").css("heigth");
		widht = parseInt("width");
		heigth = parseInt("height");

		for(var i = 0; i < l ; i++) {
			var xpos = Math.round(Math.random()*widht);
			var ypos = Math.round(Math.random()*heigth);
			var deb = $("<span class='debris' ></span>").css({ "top": xpos, "left": ypos });
			$('#jeu').append(deb);

		}
	}

point(100);

});