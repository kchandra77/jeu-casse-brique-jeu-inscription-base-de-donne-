<?php
$id=mysqli_connect('localhost','root','','Cassebrique_chandra');

// Ecrire la requete avec le $_GET
$req="SELECT * FROM joueurs WHERE pseudo='".$_COOKIE['pseudo']."'";

// Executer la requete
$res=mysqli_query($id,$req);

// Extraction du resultat
$rep=mysqli_fetch_assoc($res);
print_r($rep);
?>
<form method="GET" action="Jeu Casse Brique.php" >
<p>Nom:<input type=text name="nom" value=<?php echo $rep['nom'];?>></p>
<p>Prenom:<input type=text name="prenom" value=<?php echo $rep['prenom'];?>></p>
<p>Pseudo:<input type=text name="pseudo"value=<?php echo $rep['pseudo'];?>></p>
<p>Email:<input type=text name="email" value=<?php echo $rep['email'];?>></p>
<p><input type="submit" value="Mettre à jour"></p><br>
<p>Ancien MDP:<input type=text name="Amdp" value=<?php echo $rep['mdp'];?>></p>
<p>Nouveau MDP:<input type=text name="Nmdp"></p>
<p>Confirmer Nouveau MDP:<input type=text name="CNmdp"></p>
<p><input type="submit" value="Mettre à jour"></p><br>
</form>
