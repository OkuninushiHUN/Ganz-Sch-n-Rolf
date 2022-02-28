/*setup
forduló:
-első kocka(kivenni a kockat ami kicsik)
-masodik kocka
-harmadik kocka
-ujradobas hatkockaval
plusz egy használata vagy ujradobas*/

let fordulo =1;
let kor= 1;

function jatek(){
  if (fordulo==7){
    return vegpontozas();
  }  
  else if (kor==4){
    szinek=["green", "yellow", "white", "blue", "purple", "orange"];
    dobas(szinek);
    talcara(dkocka3);
    talcara(dkocka4);
    talcara(dkocka5);
  }
  else{
    dobas(szinek);
   kor+=1;
  }
}

jatek();