function choixConnexion(choix) {

if(choix=='connexion'){
  var connex ;
  connex= '<form action="compte.php" method="GET">';
  connex= connex + '<table align="center">';
  connex= connex + '<tr><td> Pseudo </td><td>  <input type="text" name="pseudo" /> <br> </td></tr>';
  connex= connex + '<tr><td> mdp </td><td>  <input type= "password" name= "password" /> <br> </td></tr>';
  connex= connex +'</table>';
  connex= connex + '<input class="center" type="submit" value="Envoyer" name="submit" /> <br>';
  connex= connex + '<input class="center" type="reset" value="Effacer" name="reset" /> <br> ';
  connex= connex +'</form>';
  document.getElementById('Connexion').innerHTML=connex;
          }

else if(choix=='inscription'){
  var inscrip ;

  inscrip= '<form action="compte.php" method="GET">';
  inscrip= inscrip + '<table align="center">';
  inscrip= inscrip +   '<tr><td>  Nom </td><td>  <input type="text" name="nom" /> <br> </td></tr>';
  inscrip= inscrip + '<tr><td> Prénom </td><td>  <input type= "text" name="prenom" /> <br> </td></tr>';
  inscrip= inscrip + '<tr><td>  Pseudo </td><td>  <input type= "text" name="pseudo" /> <br> </td></tr>';
  inscrip= inscrip + '<tr><td> Email </td><td> <input type= "text" name= "email" /> <br> </td></tr>';
  inscrip= inscrip + '<tr><td>  Mdp </td><td>  <input type= "password" id="mdp1" name= "password" onkeyup="verifierMDP()" /> <br> </td></tr>';

  inscrip= inscrip + '<tr><td><em id="Lettre"> 6 Lettres,</em><em id="Majuscule"> 1 Majuscule,</em><em id="Chiffre"> 3 chiffres,</em></td></tr>';

  inscrip= inscrip + '<tr><td> Confirmez mdp </td><td>  <input type= "password" id="mdp2" name= "Confirm password" /> <br> </td></tr>';

  inscrip= inscrip + '<tr><td><input class="center" type="submit" value="Inscription" name="submit" /></td></tr>';
  //inscrip= inscrip + '<input onclick="comparerMDP()" class="center" type="submit" value="Inscription" name="submit" /> <br>';
  inscrip= inscrip + '<tr><td><input onclick="comparerMDP()" class="center" type="reset" value="Effacer" name="reset" /> </td></tr>';
  inscrip= inscrip +'</table>';
  inscrip= inscrip + '</form>';
  document.getElementById('Connexion').innerHTML=inscrip;
    }
  }

function comparerMDP(comparer)
{
    var mdp= document.getElementById("mdp1").value;
    var verif=document.getElementById("mdp2").value;

    if(mdp==verif)
    {

    alert("les deux mots de passes sont identiques") ;
    return true;
    }


    else
    {
      alert("les deux mots de passes sont différentes !");
      choixConnexion('inscription');
      return false;

    }
}

function verifierMDP(verifier)
{
  var mdp1=document.getElementById('mdp1').value;
  var compteurchiffre=0;
  var compteurmajuscule=0;
  var compteurlettre=0;


    for(var i=0; i<=mdp1.length-1; i++)
    {
        if((mdp1.charAt(i)>='0') && (mdp1.charAt(i)<='9'))
        {
          compteurchiffre+= 1;
        }
        if((mdp1.charAt(i)>='A') && (mdp1.charAt(i)<='Z'))
        {
          compteurmajuscule+= 1;
        }
        if((mdp1.charAt(i)>='a') && (mdp1.charAt(i)<='z'))
        {
          compteurlettre+= 1;
        }
          compteurlettre+= compteurmajuscule ;
    }

        if(compteurlettre>=6)
        {

          document.getElementById("Lettre").style.color="green";

        }
        else {
          document.getElementById("Lettre").style.color="white";
        }
        if(compteurmajuscule>=1)
        {

          document.getElementById("Majuscule").style.color="green";
        }
        else {
          document.getElementById("Majuscule").style.color="white";
        }

        if(compteurchiffre>=3)
        {

          document.getElementById("Chiffre").style.color="green";
        }
        else {
          document.getElementById("Chiffre").style.color="white";
        }

    }
