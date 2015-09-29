
//déclaration des variables
var compteur = 0;
var cps = 0;
var degats_click =1;
var tab_ids = new Array;
var q = new Array; //stockera les items achetés


//déclaration des 3 fonctions
/*
	pour un jeu 'infini" il faut une relation mathématique
*/

function clicker(degats_click){

	compteur += degats_click;
	$("#cpt").html("<p>"+cpt+" cookies</p>");
	$("#cpt").append("<p>"+cps+" cookies per second</p>");
	console.log("+1 au compteur");

}

function dps(cps){


}



function achat_item(id){
	//ins&érer relattttion mathématique ici
	/*
	idée algo :
		if element is in tableau
			add =1 for this element
		else add element to tableau with 1 quantity
		----------------
		| id | quantité |
		-----------------
		|  0 |  5       |
		-----------------
		|  1 |  10     	|


	*/

	if $.inArray(id,tab_ids) != -1 {
		q[ $.inArray(id,tab_ids) ] += 1;
	} 
	else {
		tab_ids.push(id);
		q.push(1);
	}
	historique.push(id); //reste à définir comment orchestrer le tableau
	cps += 0.1;
	setInterval(function(){ update(); }, 1000);
	
}


$("#cookie").on ("click",function(){
		compteur+=degats_click;
	$("#cpt").html("<p>"+compteur+" cookies</p>");
	$("#cpt").append("<p>"+cps+" cookies per second</p>");
	console.log("+1 au compteur");
});

function update() {
	compteur += cps;
	compteur = Math.round(cpt);
	
	$("#cpt").html("<p>"+compteur+" cookies</p>");
	$("#cpt").append("<p>"+cps+" cookies per second</p>");
}

$("#achat").on("click",function(){
	if(cpt >= cps*cps)
	{
		cpt -= cps*cps;
		cps += 0.1;
		setInterval(function(){ update(); }, 1000);
	}

});




$(".item").click(function(){
	var itemId = jQuery(this).attr("id");
	achat_item(itemId);

	/*
	récupérer id de l'item et faire un switch case en fonction de l'id
	exemple si id=item1
		alors dps+=15 au hazard
		si id=item50
		alors dps+=150 jsais pas


	*/
});


