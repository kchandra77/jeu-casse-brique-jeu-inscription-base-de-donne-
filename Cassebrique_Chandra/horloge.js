function Clock()
   {
  var maDate = new Date() ;
  var  d=maDate.getDate() ;
  var  m=maDate.getMonth() ;
  var  a=maDate.getYear() ;
  var  h=maDate.getHours() ;
  var  min=maDate.getMinutes() ;
  var  s=maDate.getSeconds() ;

  a+=1900;

  if(m==0) {m="JANVIER";}
  if(m==1) {m="FEVRIER";}
  if(m==2) {m="MARS";}
  if(m==3) {m="AVRIL";}
  if(m==4) {m="MAI";}
  if(m==5) {m="JUIN";}
  if(m==6) {m="JUILLET";}
  if(m==7) {m="AOUT";}
  if(m==8) {m="SEPTEMBRE";}
  if(m==9) {m="OCTOBRE";}
  if(m==10) {m="NOVEMBRE";}
  if(m==11) {m="DECEMBRE";}

  if(s==0) {s="00"}
  if(s==1) {s="01"}
  if(s==2) {s="02"}
  if(s==3) {s="03"}
  if(s==4) {s="04"}
  if(s==5) {s="05"}
  if(s==6) {s="06"}
  if(s==7) {s="07"}
  if(s==8) {s="08"}
  if(s==9) {s="09"}

  if(min==0) {min="00"}
  if(min==1) {min="01"}
  if(min==2) {min="02"}
  if(min==3) {min="03"}
  if(min==4) {min="04"}
  if(min==5) {min="05"}
  if(min==6) {min="06"}
  if(min==7) {min="07"}
  if(min==8) {min="08"}
  if(min==9) {min ="09"}

  if(h==0) {h="00"}
  if(h==1) {h="01"}
  if(h==2) {h="02"}
  if(h==3) {h="03"}
  if(h==4) {h="04"}
  if(h==5) {h="05"}
  if(h==6) {h="06"}
  if(h==7) {h="07"}
  if(h==8) {h="08"}
  if(h==9) {h ="09"}

  document.getElementById('horloge').innerHTML=d+" "+m+" "+a+" - "+h+":"+min+":"+s;
  setTimeout(Clock,1000);
}
