
//déclaration des variables
var jeu = {
 john_cena: 0, /* VA CONTENIR LA MONNAIE */
 click: 1,		/* LE COEF CLIQUE SUR JOHN CENA*/
 value: 0,		/* Le NOMBRE DE FOIS QU'ON A CLIQUE SUR JOHN*/
 cps:0,
 item1: 1,
 item1_prix: 20,
 item2: 1,
 item2_prix: 100,
 item3: 0,
 item3_prix: 2000,
 bool_save:1,
 item4: 0,
 item4_prix: 10000,
 item5: 0,
 item5_prix: 50000,
};
var tab_ids = new Array;
var q = new Array; //structure à remplacer par tablerau à 2 dimensions
//equation math pour jeu.cps
setInterval(function(){ update(); }, 1000);
//déclaration des 3 fonctions
/*
	pour un jeu 'infini" il faut une relation mathématique
*/
$("#johncena").on("click",function(){ 
        jeu.value += jeu.click;
        jeu.john_cena += jeu.click

		$("#ajout").text("+ "+ jeu.click+"!");
		$( "#ajout" ).show( "fast", function(){});
		$( "#ajout" ).hide( "fast", function(){});
		//print_cookies();
		console.log("+degats_click au value");
		$("#nb_click").text("Tu as cliqué john cena " + jeu.value + " fois !");
		$("#johncena_cpt").text("Tu as " + jeu.john_cena + " JOHN CENA à ta dispo ! ");
});

function clicker(){
	jeu.value += jeu.click;
	console.log("au value :", jeu.click);
}
function achat_item(id){
	
		
	
	//ajout ou update item dans inventaire
	if($.inArray(id,tab_ids) != -1 ){
		q[ $.inArray(id,tab_ids) ] += 1;
	}
	else {
		tab_ids.push(id);
		q.push(1);
	}
	show_inventaire();
	
	if(id==1){
		if (jeu.john_cena-jeu.item1_prix>=0)
		{
		jeu.cps += 0.5;
		console.log("augmentation de 0.5 au coeff a du jeu.cps");
		console.log("on double le coeff du click");
		jeu.john_cena -= jeu.item1_prix;
		$("#nb_item1").append('<img id="nb_biceps" src="img/biceps.jpg" width="50" height="50"/>');
		$("#johncena_cpt").text("Tu as " + jeu.john_cena + " JOHN CENA à ta dispo ! ");
		jeu.item1_prix=jeu.item1_prix+jeu.item1_prix;
		$("#item1").text('Biceps : '+ jeu.item1_prix +' JOHN CENA');
		}
		else
    	{

        $("#johncena_cpt").text("T'as que " + jeu.john_cena + " JOHN CENA mauvais fan.");
    	}
	}

	if(id==2){
		if (jeu.john_cena-jeu.item2_prix>=0)
		{
		console.log("augmentation des clics : +10 + valeur du clic / 5");
		jeu.click += 10 + jeu.click/5;
		jeu.john_cena -= jeu.item2_prix;
		$("#nb_item2").append('<img id="nb_biceps" src="img/catcheur.jpg" width="50" height="50"/>');
		$("#johncena_cpt").text("Tu as " + jeu.john_cena + " JOHN CENA à ta dispo ! ");
		jeu.item2_prix=jeu.item2_prix+jeu.item2_prix+jeu.item2_prix/2;
		$("#item2").text('Catcheur : '+ jeu.item2_prix +' JOHN CENA');
	}
		else
    	{

        $("#johncena_cpt").text("T'as que " + jeu.john_cena + " JOHN CENA mauvais fan.");
    	}
	}
	if(id==3){
		if (jeu.john_cena-jeu.item3_prix>=0)
		{
		console.log("augmentation des clics par seconde : +10 + 1/5 jeu.cps");
		jeu.cps+= 15 + 0.2*jeu.cps;
		jeu.john_cena -= jeu.item3_prix;
		$("#nb_item3").append('<img id="nb_belts" src="img/belt.jpg" width="50" height="50"/>');
		$("#johncena_cpt").text("Tu as " + jeu.john_cena + " JOHN CENA à ta dispo ! ");
		jeu.item3_prix+=jeu.item3_prix/2;
		$("#item3").text('CEINTURE DE CATCH : '+ jeu.item3_prix +' JOHN CENA');
	}
		else
    	{

        $("#johncena_cpt").text("T'as que " + jeu.john_cena + " JOHN CENA mauvais fan.");
    	}
	}
	if(id==4){
		if (jeu.john_cena-jeu.item4_prix>=0)
		{
		console.log("augmentation des clics : +50 + click /5");
		jeu.click += 50 + jeu.click/5;
		jeu.john_cena -= jeu.item4_prix;
		jeu.item4_prix+=jeu.item4_prix/4;
		$("#nb_item4").append('<img id="nb_ring" src="img/ring.jpg" width="50" height="50"/>');
		$("#johncena_cpt").text("Tu as " + jeu.john_cena + " JOHN CENA à ta dispo ! ");
		
		$("#item4").text('Ring : '+ jeu.item4_prix +' JOHN CENA');
	}
	
		else
    	{

        $("#johncena_cpt").text("T'as que " + jeu.john_cena + " JOHN CENA mauvais fan.");
    	}
	}
	if(id==5){
		if (jeu.john_cena-jeu.item5_prix>=0)
		{
		console.log("augmentation des clics : +50 + click /5");
		jeu.cps += 10000 + 0.1*jeu.cps;
		jeu.john_cena -= jeu.item5_prix;
		$("#nb_item5").append('<img id="nb_ring" src="img/johncena1.jpg" width="50" height="50"/>');
		$("#johncena_cpt").text("Tu as " + jeu.john_cena + " JOHN CENA à ta dispo ! ");
		jeu.item5_prix=jeu.item5_prix*2;
		$("#item5").text('JOHN CENA COUTE : '+ jeu.item5_prix +' JOHN CENA MINDFUCK');
		}
		else
    	{

        $("#johncena_cpt").text("T'as que " + jeu.john_cena + " JOHN CENA mauvais fan.");
    	}

	}
	
	//update jeu.cps ou click
	/*
	nos items vont de 1 à n
		il faut créer des plages d'items avec des actions définis : soit agissant sur le jeu.cps / soit sur les degats du click
		exemples :
			de 1 à 10 : vaut 1/10 de l'id et uniquement pour click
			de 10 à 20 : vaut 1/100 de l'id pouir click -> item10 donnera un jeu.cps de 1.1
	*/
};

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


function update() {
	console.log("time for update");
	jeu.john_cena += jeu.cps;
	jeu.john_cena = Math.round(jeu.john_cena);
	print_cookies();
	if (jeu.john_cena-jeu.item3_prix>=0)
	{
		$( "#nb_item3" ).show( "slow", function(){});
		$( "#nb_belts" ).show( "slow", function(){});
		$( "#item3" ).show( "slow", function(){});
		$( "#3" ).show( "slow", function(){});
	}

	if (jeu.john_cena-jeu.item4_prix>=0)
	{
		$( "#nb_item4" ).show( "slow", function(){});
		$( "#nb_nb_ring" ).show( "slow", function(){});
		$( "#item4" ).show( "slow", function(){});
		$( "#4" ).show( "slow", function(){});
	}

	if (jeu.john_cena-jeu.item5_prix>=0)
	{
		$( "#nb_item5" ).show( "slow", function(){});
		$( "#nb_nb_johncena1" ).show( "slow", function(){});
		$( "#item5" ).show( "slow", function(){});
		$( "#5" ).show( "slow", function(){});
	}
}

function print_cookies(){
	$("#cpt").html("<p>"+jeu.john_cena+" cookies</p>");
	$("#cpt").append("<p>"+jeu.cps+" cookies per second</p>");
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

