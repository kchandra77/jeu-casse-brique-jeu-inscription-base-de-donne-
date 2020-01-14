function DessinerRaquette()
{
	//dessiner la raquette
	context.beginPath();
	context.rect(positionXRaquette,positionYRaquette,longueurRaquette,largeurRaquette);
	context.fillStyle=(couleurRaquette);
	context.fill();// caractéristique du dessiner
	context.stroke(); // fin de dessin
}


function AnimerRaquette()
{
	if(positionXRaquette>=terrainLongueur-longueurRaquette)
	{
		positionXRaquette=terrainLongueur-longueurRaquette
	}
 if(positionXRaquette<=0)
 {
	 positionXRaquette=0;
 }

DessinerRaquette();
}
function testerColisionBalleRaquette()
{
	if(ballePositionX>=positionXRaquette && ballePositionX<=positionXRaquette+longueurRaquette && ballePositionY+tailleBalle>=positionYRaquette)
			{
				AxeBalleY=1;
				//	alert("raquette toucher");
			}
}
