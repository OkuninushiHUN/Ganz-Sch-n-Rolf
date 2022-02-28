var szinek = ["green", "yellow", "white", "blue", "purple", "orange"];
var map = document.querySelector('map');
map.addEventListener("click", eventHandler, false);
var select=[];
var szurke= new Gray();
var sarga= new Yellow();
var orange= new Orange();
var kek= new Blue();
var zold= new Green();
var lila= new Purple();
var feherK=0;
let kekK=0;
let dkockak=[];
let talca=[];
let fagyasztas=0;
let pluszegy=0;


function hozzaadas(dkocka) {
  
}

function talcara(dkocka){
   eltavolit(dkocka.szam);
    var newkocka = document.createElement('span');
    newkocka.style.left = 0 + 'px';
    newkocka.style.top = 0 + 'px';
    newkocka.id = dkocka.szam;
    document.getElementById("talca").appendChild(newkocka);
    document.getElementById((newkocka.id)).style.color=dkocka.color;
    switch (dkocka.ertek-1) {
      case 0:
        newkocka.className = 'fas fa-dice-one';
        newkocka.ertek = 1;
        break;
      case 2:
        newkocka.className = 'fas fa-dice-three';
        newkocka.ertek = 3
        break;
      case 1:
        newkocka.className = 'fas fa-dice-two';
        newkocka.ertek = 2;
        break;
      case 3:
        newkocka.className = 'fas fa-dice-four';
        newkocka.ertek = 4;
        break;
      case 4:
        newkocka.className = 'fas fa-dice-five';
        newkocka.ertek = 5;
        break;
      case 5:
        newkocka.className = 'fas fa-dice-six';
        newkocka.ertek = 6
        break;
    }
  return; 
}

function randomizalas(tomb){
  let currentIndex = tomb.length, tempErtek, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempErtek = tomb[currentIndex];
    tomb[currentIndex] = tomb[randomIndex];
    tomb[randomIndex] = tempErtek;
  }
  return tomb;
}


function dobas(tomb) {
  dkockak=[];
  let ideig=[];
  for (let i=0;i<tomb.length;i++){
    ideig.push(Math.floor(Math.random() * 6));
  }
  let dobasok=ideig.sort((a,b)=>a-b);
  randomizalas(tomb);
  for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] == 'white'){
      feherK=dobasok[i];
    }
    if (tomb[i] == 'blue'){
      kekK=dobasok[i];
    }
    var dkocka = document.createElement('span');
    dkocka.style.left = 0 + 'px';
    dkocka.style.top = 0 + 'px';
    dkocka.id = "dkocka" + i;
    dkocka.szam="dkocka"+i;
    document.getElementById("kocka").appendChild(dkocka);
    document.getElementById(("dkocka"+i)).style.color=tomb[i];
    document.getElementById(("dkocka"+i)).style.flex=i+2;
    dkocka.color=tomb[i];
    switch (dobasok[i]) {
      case 0:
        dkocka.className = 'fas fa-dice-one';
        dkocka.ertek = 1;
        break;
      case 2:
        dkocka.className = 'fas fa-dice-three';
        dkocka.ertek = 3
        break;
      case 1:
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
    dkockak.push(dkocka);
    document.getElementById("dkocka"+i).onclick=function(){ return select=[this.ertek,this.color]};
    
  }
}


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

function vegpontozas(Blue,Green,Yellow,Orange,Purple,Gray) {
  let kek = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46];
  let zold = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
  let szurkePont=Gray.pontozas();
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
        return szurke.hozzaadas(clicked,mezo);
      case "so":
        return sarga.hozzaadas(clicked,mezo);
      case "or":
        return orange.hozzaadas(clicked,mezo);
      case "ke":
        return kek.hozzaadas(clicked,mezo);
      case "gr":
        return zold.hozzaadas(clicked,mezo);
      case "li":
        return lila.hozzaadas(clicked,mezo);
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
  document.getElementById(clicked).innerHTML="  "+select[0];
  return dobas(szinek);
}



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
  document.getElementById(clicked).innerHTML=" X";
  eltavolit(id);
  return beiras(szinek);
}
