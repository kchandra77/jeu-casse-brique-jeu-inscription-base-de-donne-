function Principale(){
	context.beginPath();
	context.clearRect(0,0,terrainLongueur,terrainLargeur);
	context.stroke();
	AnimerBalle();
	AnimerRaquette();
	DessinerBrique();
	Initialisation();
	b= setTimeout("Principale()",1);
	Perdu();
}

window.onkeypress = function OnKeyPressed(event)
{

		var x = event.keyCode;
			if (x == '32' && jeuEncours==false)
			{
				 Principale();
				 jeuEncours=true;
			}
}

window.onkeydown = function OnKeyDown(event)
{
	var a = event.keyCode;
	var y = 0;
		if (a == '39')
		{
				positionXRaquette=positionXRaquette+10;

		}
		else if( a == '37')
		{
				positionXRaquette=positionXRaquette-10;
		}

		if (a=='27' && jeuEncours==true)
		{
			jeuEncours=false;
			clearTimeout(b);
		}
	}
function Perdu()
{
		if(ballePositionY+tailleBalle>=positionYRaquette+largeurRaquette)
		{
			alert("game over");
			ballePositionX=300;
			ballePositionY=350;
			positionXRaquette=225;
			positionYRaquette=370;
			clearTimeout(b);
		}
}
