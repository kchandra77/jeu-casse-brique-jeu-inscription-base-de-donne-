<<?php
echo "<pre>";print_r($_GET);echo "/<pre>";
if(isset($_COOKIE['pseudo'])!=0){
  setcookie('pseudo',$_GET['pseudo'],time()-1,'/');
  header('location:Jeu Casse Brique.php');
}
echo "pseudo:".$_GET['pseudo'];
$id=mysqli_connect('localhost','root','','Cassebrique_chandra');

// Ecrire la requete avec le $_GET
//$req="SELECT count(nom) as nombre FROM joueurs WHERE pseudo='".$_GET['pseudo']."' and mdp='".$_GET['password']."'";

// Executer la requete
//$res=mysqli_query($id,$req);

// Extraction du resultat
//$rep=mysqli_fetch_assoc($res);

//echo "<pre>";print_r($rep);echo"</pre>";

//CONNEXION

if( $_GET["submit"]=="Envoyer")
  {
    $req="SELECT count(nom) as nombre FROM joueurs WHERE pseudo='".$_GET['pseudo']."' and mdp='".$_GET['password']."'";
    $res=mysqli_query($id,$req);
    $rep=mysqli_fetch_assoc($res);
    echo "<pre>";print_r($rep);echo"</pre>";
    //COOKIE
    if($rep['nombre']==1)
    {
      setcookie('pseudo',$_GET['pseudo'],time()+3600,'/');
      header('location:Jeu Casse Brique.php');
    }
    else echo '<h1>connexion échouée, réessayez</h1>';

}
//INSCRIPTION

if( $_GET["submit"]=="Inscription")
{
  $req2="SELECT count(nom) as nombre FROM joueurs WHERE pseudo='".$_GET['pseudo']."'";
  $res2=mysqli_query($id,$req2);
  $rep2=mysqli_fetch_assoc($res2);
    if($rep2['nombre']==0)
    {
      $req3= "INSERT INTO joueurs(nom,prenom,pseudo,email,mdp) VALUES ('".$_GET['nom']."','".$_GET['prenom']."','".$_GET['pseudo']."','".$_GET['email']."','".$_GET['password']."')";
      mysqli_query($id,$req3);
      echo "INSERT INTO joueurs(nom,prenom,pseudo,email,mdp) VALUES ('".$_GET['nom']."','".$_GET['prenom']."','".$_GET['pseudo']."','".$_GET['email']."','".$_GET['password']."')";
      setcookie('pseudo',$_GET['pseudo'],time()+3600,'/');
      header('location:Jeu Casse Brique.php');
    }
    else echo '<h1>incription échouée, réessayez</h1>';
}
 ?>
