
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
setInterval(function(){ update(); }, 1000);
//déclaration des 3 fonctions
/*
	pour un jeu 'infini" il faut une relation mathématique
*/

function update_click(){
	degats_click = coeff_a_click*coeff_x_click;
	console.log("ceci est les degats du click",degats_click);
}
function update_dps(){
	cps=coeff_a_cps*coeff_x_cps+coeff_b_cps;
	console.log("ceci est les dagats cps",cps);
}
function clicker(){
	compteur += degats_click;
	console.log("au compteur :", degats_click);
}
function achat_item(id){
	//checker si cookies suffisant pour acheter
	var price = id * 10;
	if(compteur >= price){
		//soustraire prix item aux cookies
		compteur -= price;
	}
	//afficher nouvelle quantité cookies
	print_cookies();
	//ajout ou update item dans inventaire
	if($.inArray(id,tab_ids) != -1 ){
		q[ $.inArray(id,tab_ids) ] += 1;
	}
	else {
		tab_ids.push(id);
		q.push(1);
	}
	//show_inventaire();
	//action de l'item
	if(id==1){
		coeff_x_cps += 0.5;
		console.log("augmentation de 0.5 au coeff a du cps");
		coeff_a_click += coeff_a_click;
		console.log("on double le coeff du click");
	}
	if(id==2){
		coeff_x_cps+=coeff_x_cps;
	}
	if(id==3){
	}
	if(id==4){
	}
	if(id==5){
	}
	//update cps ou click
	update_dps();
	update_click();
	/*
	nos items vont de 1 à n
		il faut créer des plages d'items avec des actions définis : soit agissant sur le cps / soit sur les degats du click
		exemples :
			de 1 à 10 : vaut 1/10 de l'id et uniquement pour click
			de 10 à 20 : vaut 1/100 de l'id pouir click -> item10 donnera un cps de 1.1
	*/
}

$(".item").click(function(){
	var itemId = jQuery(this).attr("id");
	achat_item(itemId);
	console.log("achat de l'item");
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
		print_cookies();
		console.log("+degats_click au compteur");
});

function update() {
	console.log("time for update");
	compteur += cps;
	compteur = Math.round(compteur);
	print_cookies();
}

function print_cookies(){
	$("#cpt").html("<p>"+compteur+" cookies</p>");
	$("#cpt").append("<p>"+cps+" cookies per second</p>");
}
function show_inventaire(){
	//$("#inventory").html("<p>"+compteur+" cookies</p>");
	console.log( $.toJSON(q) );
	console.log( $.toJSON(tab_ids) );
}
