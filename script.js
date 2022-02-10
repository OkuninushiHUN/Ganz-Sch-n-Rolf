var szinek = ["green", "yellow", "white", "blue", "purple", "orange"]
var map = document.querySelector('map');
map.addEventListener("click", eventHandler, false);
var select=[1,"green"];
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




//Ez jó
var szurke= new Gray();
var sarga= new Yellow();
var orange= new Orange();
var kek= new Blue();
var zold= new Green();
var lila= new Purple();

// ez jó
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



function eventHandler(e) {
  e.preventDefault();
  if (e.target != e.currentTarget) {
    let clicked = e.target.coords;
    let mezo=e.target.title
    console.log(mezo);
    switch (mezo.substring(0,2)){
      case "sz":
        return szurke.hozzaadas(clicked);
      case "so":
        return sarga.hozzaadas(clicked);
      case "or":
        return orange.hozzaadas(clicked);
      case "ke":
        return kek.hozzaadas(clicked);
      case "gr":
        return zold.hozzaadas(clicked);
      case "li":
        return lila.hozzaadas(clicked);
    }
  }
  e.stopPropagation();
}


function beiras(clicked)
{
  koordinate=clicked.split(',');
  let x=parseInt(koordinate[0]);
  let y=parseInt(koordinate[1]);
  let elem=document.createElement('span');
  let palya=document.getElementById('palya');
  palya.appendChild(elem);
  elem.classList.add('iras');
  elem.setAttribute('id',clicked);
  document.getElementById(clicked).style.top=y+"px";
  document.getElementById(clicked).style.left=x+"px";
  document.getElementById(clicked).innerHTML=select[0];
}
dobas(szinek)


function xeles(clicked)
{
  koordinate=clicked.split(',');
  let x=parseInt(koordinate[0]);
  let y=parseInt(koordinate[1]);
  let elem=document.createElement('span');
  let palya=document.getElementById('palya');
  palya.appendChild(elem);
  elem.classList.add('iras');
  elem.setAttribute('id',clicked);
  document.getElementById(clicked).style.top=y+"px";
  document.getElementById(clicked).style.left=x+"px";
  document.getElementById(clicked).innerHTML="X";
}

console.log(szurke);