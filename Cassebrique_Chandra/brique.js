function DessinerBrique(){
  for(i=0; i<10 ; i++)
  {
      TableauPositionXBrique[i]=espaceBrique+60*i;
      TableauPositionYBrique[i]=10;

      if(tableauScoreBrique[i]!=0)
      {
        context.beginPath();
        context.rect(TableauPositionXBrique[i],TableauPositionYBrique[i],longueurBrique,largeurBrique);
        context.fillStyle=(couleurBrique);
        context.fill();// caractéristique du dessiner
        context.stroke(); // fin de dessin
      }
  }

}
function testerColisionBalleBrique()
{
  if(ballePositionY-tailleBalle<=TableauPositionYBrique[0]+largeurBrique)
			{
				for(numeroBrique=0;numeroBrique<nbBriqueTotal;numeroBrique++)
        {
          if(ballePositionX>=TableauPositionXBrique[numeroBrique] && ballePositionX<=TableauPositionXBrique[numeroBrique]+longueurBrique && tableauScoreBrique[numeroBrique]!=0)
          {
          AxeBalleY=0;
        tableauScoreBrique[numeroBrique]=0;
          }
			  }
     }

     	if(tableauScoreBrique[i]==0)
     {
     	 Score++;
     }
     document.getElementById('Point').innerHTML="Score : "+Score;
}
