
//déclaration des variables
var compteur = 0;

var coeff_a_click =1;
var coeff_x_click=1;
var degats_click = coeff_a_click*coeff_x_click;
var tab_ids = new Array;
var q = new Array; //structure à remplacer par tablerau à 2 dimensions
//equation math pour cps
var coeff_a_cps = 1;
var coeff_b_cps = 0;
var coeff_x_cps = 0;
var cps=coeff_a_cps*coeff_x_cps+coeff_b_cps
//déclaration des 3 fonctions
/*
	pour un jeu 'infini" il faut une relation mathématique
*/
function update_click(){
	
}

function clicker(){

	compteur += degats_click;
	$("#cpt").html("<p>"+compteur+" cookies</p>");
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

	if($.inArray(id,tab_ids) != -1 ){
		q[ $.inArray(id,tab_ids) ] += 1;
	} 
	else {
		tab_ids.push(id);
		q.push(1);
	}
	if(id>0 and if <10) {

	}
	/*
	nos items vont de 1 à n
		il faut créer des plages d'items avec des actions définis : soit agissant sur le cps / soit sur les degats du click
		exemples :
			de 1 à 10 : vaut 1/10 de l'id et uniquement pour click
			de 10 à 20 : vaut 1/100 de l'id pouir click -> item10 donnera un cps de 1.1
	*/
	var price = id * 10
	compteur -= price

	cps += 0.1;
	setInterval(function(){ update(); }, 1000);
	
}

$(".item").click(function(){
	var itemId = jQuery(this).attr("id");
	achat_item(itemId);
	console.log(itemId);

	/*
	récupérer id de l'item et faire un switch case en fonction de l'id
	exemple si id=item1
		alors dps+=15 au hazard
		si id=item50
		alors dps+=150 jsais pas


	*/
});

$("#cookie").on("click",function(){
		compteur+=degats_click;
	$("#cpt").html("<p>"+compteur+" cookies</p>");
	$("#cpt").append("<p>"+cps+" cookies per second</p>");
	console.log("+1 au compteur");
});

function update() {
	compteur += cps;
	compteur = Math.round(compteur);
	
	$("#cpt").html("<p>"+compteur+" cookies</p>");
	$("#cpt").append("<p>"+cps+" cookies per second</p>");
	setInterval(function(){ update(); }, 1000);
}




