class Kocka{
  constructor(color, id, ertek){
  this.color=color;
  this.ertek=ertek;
  this.id="dkocka"+id;
  } 
}

function check(szam,color){
  szinek.splice(0,szinek.length);
  let id;
  for (let index = 0; index < dkockak.length; index++) {         
    if(select[0]>dkockak[index].ertek){
      talcara(dkockak[index]);}
    else if(select[1]==dkockak[index].color){
      id=dkockak[index].color;
    }
    else{
      szinek.push(dkockak[index].color);
      eltavolit(dkockak[index].szam);
    }eltavolit(id); 
  }
  eltavolit(id);
}


//Ez kész
class Purple {
  constructor() {
    this.pelemek = [-7, 7];
    this.teli = false;
  }
  hozzaadas(coordinate,mezo) {
    if (!this.teli) {
      if(mezo.slice(4)==this.pelemek.length-1){
      if ((select[1] == 'purple' || select[1] == 'white') && (select[0] == 6 || this.pelemek[this.pelemek.length - 1] >= select[0])) {
        this.pelemek.push(select[0]);
        if (this.pelemek.length == 12) {
          this.teli = true;
          this.pelemek.push(12);
        }
        check(select[0],select[1]);
        return beiras(coordinate);
      }
      else {
        return select;
      }
    }
    }
  }
  vegpontozas() {
    let sum = 0;
    for (let i = 0; i.this.elemek.length; i++) {
      sum += this.elemek[i];
    }
    return sum;
  }
}
class Green {
  constructor() {
    this.zelemek = [];
    this.teli = false;
  }
  hozzaadas(coordinate, mezo) {
    console.log(this.zelemek.length + 1)
    if (parseInt(mezo[5]) == this.zelemek.length + 1) {
      if ((select[1] == 'green' || select[1] == 'white') && (this.teli == false && select[0] % 2 == (this.zelemek.length + 1) % 2)) {
        this.zelemek.push(select[0]);
        xeles(coordinate);
      }
    }
    else {
      return select;
    }
  }
}
class Gray {
  constructor() {
    this.gelemek = [];
    this.gszinek = [];
  }
  hozzaadas(coordinate, mezo) {


    if (!this.gszinek.includes(select[1]) && !this.gelemek.includes(String(select[0]))) {
      if (select[1] == mezo.slice(2)) {
        this.gelemek.push(String(select[0]));
        this.gszinek.push(select[1]);
        return beiras(coordinate);
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  pontozas() {
    return ((this.gelemek.length - 6) * 3);
  }
}
class Blue {
  constructor() {
    this.belemek = [];
  }
  hozzaadas(coordinate, mezo) {
    let x=kekK + feherK+2;
    if (!this.belemek.includes(x) && (select[1] == 'blue' || select[1] == 'white')) {
      if (String(mezo.slice(3)) == x) {
        this.belemek.push(x);
        xeles(coordinate);
      }
      else {
        return;
      }
    }
    return select;
  }
}
class Orange {
  constructor() {
    this.starter = 0;
    this.borange = [];
    this.jorange = [];
    this.teli = false;
  }
  hozzaadas(coordinate,mezo){
    
    if (select[1] != 'orange' && select[1] != 'white'){
      return select;
    }
    else if (this.starter == 0 && mezo.slice(6)=="Start") {
      this.starter = select[0];
      this.borange.push(select[0]);
      this.jorange.push(select[0]);
      return beiras(coordinate);
    }
    else if(mezo.slice(6,10)=="Down"){
      if (this.starter==0){
        return select;
      }
      let a = parseInt(mezo.slice(10));    
      if ((this.borange[a-1] == select[0]-1 || this.borange[a-1]==select[0]+1) && a==this.borange.length){
      this.borange.push(select[0]);
      return beiras(coordinate);}}
    else{
      if (this.starter==0){
        return select;
      }
      let a = parseInt(mezo.slice(8));
      if (a==6){
        if (typeof(this.borange[4]) != "undefined"){
          if (select[0]+1 != this.borange[4] && select[0]-1 != this.borange[4]){
            return select;
        }}
      }
      if (this.jorange[a-1] == select[0]-1 || this.jorange[a-1]==select[0]+1){
      this.jorange.push(select[0]);
      return beiras(coordinate);}   
    }

  }
}
class Yellow {
  constructor() {
    this.sor11 = 0;
    this.sor12 = 0;
    this.sor13 = 0;
    this.sor14 = 0;
    this.sor21 = 0;
    this.sor22 = 0;
    this.sor23 = 0;
    this.sor31 = 0;
    this.sor32 = 0;
    this.sor41 = 0;
  }
  hozzaadas(coordinate, mezo) {
    console.log(sarga);
    if (this.mezo != 0 && (select[1] == 'yellow' || select[1] == 'white')) {
      console.log(mezo[3]);
      switch (mezo[3]) {
        case "1":
          switch (mezo[4]){
            case "1":
              this.sor11=select[0];
              break;
            case "2":
              this.sor12=select[0];
              break;
            case "3":
              this.sor13=select[0];
              break;
            case "4":
              this.sor14=select[0];
              break;
          } 
          return beiras(coordinate);
        case "2":
          switch (mezo[4]) {
            case "1":
              if (this.sor11 != 0 && this.sor12 !=0 && (this.sor11 + this.sor12 == select[0] || this.sor11 + this.sor12 - 6 == select[0])) {
                this.sor21 = select[0];
                return beiras(coordinate);
              }
              else { break; }
            case "2":
              if (this.sor12 != 0 && this.sor13 !=0 && (this.sor13 + this.sor12 == select[0] || this.sor14 + this.sor13 - 6 == select[0])) {
                this.sor22 = select[0];
                return beiras(coordinate);
              }
            case "3":
              if (this.sor13 != 0 && this.sor14 !=0 && (this.sor13 + this.sor14 == select[0] || this.sor13 + this.sor14 - 6 == select[0])) {
                this.sor23 = select[0];
                return beiras(coordinate);
              }
          }
        case "3":
          switch (mezo[4]) {
            case "1":
              if (this.sor21 != 0 && this.sor22 !=0 && (this.sor21 + this.sor22 == select[0] || this.sor21 + this.sor22 - 6 == select[0])) {
                this.sor31 = select[0];
                return beiras(coordinate);
              }
            case "2":
              if (this.sor22 != 0 && this.sor23 !=0 && (this.sor22 + this.sor23 == select[0] || this.sor22 + this.sor23 - 6 == select[0])) {
                this.sor32 = select[0];
                return beiras(coordinate);
              }
          }
        case "4":
          if (this.sor31 != 0 && this.sor32 !=0 && (this.sor31 + this.sor32 == select[0] || this.sor13 + this.sor14 - 6 == select[0])) {
            this.sor41 = select[0];
            return beiras(coordinate);
          }
      }
    }
    return;
  }




}

class Jatekos{
  constructor() {
    this.chance=true;
    this.borzokSzama=0;
    this.plusz1=0;
    this.freeze=1;
    this.szurke= new Gray();
    this.sarga= new Yellow();
    this.orange= new Orange();
    this.kek= new Blue();
    this.zold= new Green();
    this.lila= new Purple();
  }
  addPlusz1(){
    return this.plusz1+=1;
  }
  spendPlusz1(){
    if (this.plusz1 > 0){ 
    this.chance=true;
    return this.plusz-=1;}
  }
  freeze(){
    return kor+=1;
  }
  reroll(){
    return dobas(szinek);
  }
  
}


