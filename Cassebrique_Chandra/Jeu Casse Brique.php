<!doctype html>
<html>
<head>
	<title> formulaire simple</title>
	<link rel="stylesheet" href="./Jeu Casse Brique.css" type="text/css" />
	<meta charset="utf-8">
	<script language="javascript" src="horloge.js"></script>
	<script	language="javascript" src="changecolor.js"></script>
	<script src="formulaireConnexion.js" language="javascript"></script>
	<script	language="javascript" src="brique.js"></script>
	<script	language="javascript" src="balle.js"></script>
	<script	language="javascript" src="raquette.js"></script>
	<script	language="javascript" src="animation.js"></script>


</head>
			<body onload="Clock()">
			<form action="ckurunchi@gmail.com" method="get" class="centre"></form>

				<header  class= "center"> <h1> Bienvenue </h1> </header>

					<nav align="center">
							<a onclick="Initialisation()" href='./Jeu Casse Brique.php'> Casse Brique</a>
							<a href=".index.html">Serpent</a>
							<?php
							if(isset($_COOKIE['pseudo']))
								{
									echo '<a href="./Jeu Casse Brique.php?profile">'.$_COOKIE['pseudo'].'</a>';
									echo "<a href='./compte.php'>Deconnexion</a>";
									//print_r("<script>document.getElementById('connex').innerHTML='Deconnexion'"."</script>");
									//print_r("<script>document.getElementById('deco').innerHTML='Deconnexion'"."</script>");
								}else{ ?>
							<a onclick="choixConnexion('inscription')" id='connex'> Inscription</a>
							<a onclick="choixConnexion('connexion')" id='deco'> Connexion</a>

						<?php } ?>
					</nav>


					<aside>
							<div id="horloge"></div>
							<div id="Connexion"></div>

						</aside>

					<section>
						<?php
						if(isset($_GET['profile']))
						{
							include('profile.php');
						}else{	?>
					<canvas id="canvasGlobal" width="600px"	height="400px"	>
					</canvas>
					<script	language="javascript" src="global.js"></script>
					<?PHP }?>
					</section>


					<footer onload="changerBackground()">
						<img class="color" src='Fond/Rouge.png' onclick="changerCouleur('red')"/>
						<img class="color"class="color"class="color"class="color"src='Fond/Vert.png' onclick="changerCouleur('green')"/>
						<img class="color"class="color"class="color"src='Fond/Jaune.png' onclick="changerCouleur('yellow')"/>
						<img class="color"class="color"src='Fond/Bleu.png' onclick="changerCouleur('blue')"/>
						<img class="color"src='Fond/Wallpaper.png' onclick="changerBackground('Fond/Wallpaper.png')"/>
						<div id="Point"></div>


					</footer>
					<div onkeypress= "OnKeyPressed(event)"></div>
					<div onkeydown= "OnKeyDown(event)"></div>
			</body>
</html>
