var szinek = ["green", "yellow", "white", "blue", "purple", "orange"]
var map = document.querySelector('map');
map.addEventListener("click", eventHandler, false);
var select=[];
var borzok=0;

function dobas(tomb) {
  for (let i = 0; i < tomb.length; i++) {
    let dkocka = document.createElement('div');
    dkocka.style.left = 0 + 'px';
    dkocka.style.top = 0 + 'px';
    dkocka.id = "dkocka" + i;
    document.getElementById("kocka").appendChild(dkocka);
    document.getElementById(("dkocka"+i)).style.color=tomb[i];
    dkocka.color=tomb[i];
    switch (Math.floor(Math.random() * 6)) {
      case 0:
        dkocka.className = 'fas fa-dice-one';
        dkocka.ertek = 1;
        break;
      case 1:
        dkocka.className = 'fas fa-dice-three';
        dkocka.ertek = 3
        break;
      case 2:
        dkocka.className = 'fas fa-dice-two';
        dkocka.ertek = 2;
        break;
      case 3:
        dkocka.className = 'fas fa-dice-four';
        dkocka.ertek = 4;
        break;
      case 4:
        dkocka.className = 'fas fa-dice-five';
        dkocka.ertek = 5;
        break;
      case 5:
        dkocka.className = 'fas fa-dice-six';
        dkocka.ertek = 6
        break;
    }
    document.getElementById("dkocka"+i).onclick=function(){ return select=[this.ertek,this.color]};
    
  }
}

function eltavolit(idt) {
  try {
    var myobj = document.getElementById(idt);
    myobj.remove();
  }
  catch{
    return;
  }
}

function vegpontozas(Blue,Green,Yellow,Orange,Purple,Grey) {
  let kek = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46];
  let zold = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
  let szurkePont=Grey.pontozas();
  let yellowPont=Yellow.pontozas();
  let orangePont=Orange.pontozas();
  let kekPont=kek[Blue.belemek.length-1];
  let zoldPont=zold[Green.zelemek.length-1];
  let lilaPont=Lila.vegpontozas();
  

}

dobas(szinek);

function eventHandler(e) {
  e.preventDefault();
  if (e.target != e.currentTarget) {
    var clicked = e.target.title;
    console.log('click event triggered at ' + clicked);
      }
  e.stopPropagation();
}

