var canvas= document.getElementById('canvasGlobal');
var context= canvas.getContext('2d');

// Terrain
var terrainLongueur=600;
var terrainLargeur=400;
var positionXterrain=0;
var positionYterrain=0;
// Briques
var largeurBrique=10;
var longueurBrique=58;
var nbBriqueTotal=10;
var espaceBrique=2;
var couleurBrique='blue';
var TableauPositionXBrique = new Array(10);
var TableauPositionYBrique = new Array(10);
var i;
var numeroBrique;
var tableauScoreBrique= new Array(10);
var Score=0;
// Balle
var tailleBalle=7;
var xRectangle=225;
var yRectangle=350;
var longRectangle=100;
var largRectangle=14;
var AxeBalleX=1;
var AxeBalleY=1;
var ballePositionX=longRectangle/2+xRectangle;
var ballePositionY=largRectangle/2+yRectangle;
var couleurBalle='green';
var jeuEncours=false;
// Raquette
var longueurRaquette=100;
var largeurRaquette=14;
var positionXRaquette=225;
var positionYRaquette=370;
var couleurRaquette='blue';
var AxeRaquetteX=1;
var AxeRaquetteY=1;

function Initialisation()
{
DessinerBalle();
DessinerBrique();
DessinerRaquette();
}
