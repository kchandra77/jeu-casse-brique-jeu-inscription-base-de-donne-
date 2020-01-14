function DessinerBalle(){
  //dessiner un cercle
        context.beginPath();
        context.arc(ballePositionX,ballePositionY,tailleBalle,0,2*Math.PI,false); // caractéristique du cercle
        context.fillStyle=(couleurBalle); // couleur du cercle
        context.fill();
        context.stroke();
}
function AnimerBalleV()
  {

		 if(ballePositionY>=terrainLargeur-tailleBalle)
		{
	 		AxeBalleY=1;
	 	}
	 	if(ballePositionY<=0+tailleBalle)
		{
	 		AxeBalleY=0;
	 	}
	 	if(AxeBalleY==1)
		{
	     ballePositionY-=1;
		}
	 	if(AxeBalleY==0)
		{
	 		ballePositionY+=1;
	 	}

  }

  function AnimerBalleH()
  {

    if(ballePositionX>=terrainLongueur-tailleBalle)
    {
      AxeBalleX=1;
    }
    if(ballePositionX<=0+tailleBalle)
    {
      AxeBalleX=0;
    }
    if(AxeBalleX==1)
    {
      ballePositionX-=1;
    }
    if(AxeBalleX==0){
      ballePositionX+=1;
    }
}
function AnimerBalle()
{
testerColisionBalleBrique();
testerColisionBalleRaquette();
AnimerBalleH();
AnimerBalleV();
}
