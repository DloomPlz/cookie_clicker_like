
//déclaration des variables
var jeu = {
 john_cena: 0,
 click: 1,
 value: 0,
 item1: 1,
 item1_prix: 2000,
 item2: 1,
 item2_prix: 10000,
 item3: 0,
 item3_prix: 50000,
 bool_save:1
 item4: 0,
 item4_prix: 100000,
 item5: 0,
 item5_prix: 5000000,
};
var compteur = 0;
var degats_click = 1;
var tab_ids = new Array;
var q = new Array; //structure à remplacer par tablerau à 2 dimensions
//equation math pour cps
var cps=0;
setInterval(function(){ update(); }, 1000);
//déclaration des 3 fonctions
/*
	pour un jeu 'infini" il faut une relation mathématique
*/

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
	show_inventaire();
	//action de l'item
	if(id==1){
		cps += 0.5;
		console.log("augmentation de 0.5 au coeff a du cps");
		degats_click += degats_click;
		console.log("on double le coeff du click");
	}
	if(id==2){
	}
	if(id==3){
	}
	if(id==4){
	}
	if(id==5){
	}
	if(id==6){
	}
	if(id==7){
	}
	if(id==8){
	}
	if(id==9){
	}
	if(id==10){
	}
	//update cps ou click
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
	var vPool="";
        for (i=0; i<q.length; i++) {
					val=tab_ids[i];
          vPool += "<tr><td>" + val + "</td>";
					val=q[i];
					vPool += "<td>" + val + "</td></tr>";
        };
				console.log(vPool);
  	$('#inventory').html(vPool);

}

