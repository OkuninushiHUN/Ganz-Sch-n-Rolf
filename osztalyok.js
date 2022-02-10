class Kocka {
  constructor(szin, szam) {
    this.id = "dkocka" + szam;
    this.szin = szin;
    switch (Math.floor(Math.random() * 6)) {
      case 0:
        this.className = 'fas fa-dice-one';
        this.ertek = 1;
        break;
      case 1:
        this.className = 'fas fa-dice-three';
        this.ertek = 3
        break;
      case 2:
        this.className = 'fas fa-dice-two';
        this.ertek = 2;
        break;
      case 3:
        this.className = 'fas fa-dice-four';
        this.ertek = 4;
        break;
      case 4:
        this.className = 'fas fa-dice-five';
        this.ertek = 5;
        break;
      case 5:
        this.className = 'fas fa-dice-six';
        this.ertek = 6
        break;
    }
  }
}

class Purple {
  constructor() {
    this.pelemek = [-7, 7];
    this.teli = false;
  }
  hozzaadas(select) {
    if ((select[1] == 'purple' || select[1] == 'white') && (this.teli == false && this.pelemek[-1] >= select[0])) {

      this.elemek.push(select[0]);
      if (elemek.length == 12) {
        this.teli = true;
        this.elemek.push(12);
      }
      return;
    }
    else {
      return select;
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
  hozzaadas(select) {
    if ((select[1] == 'green' || select[1] == 'white') && (this.teli == false && select[0] % 2 == this.zelemek.length + 1)) {
      this.zelemek.push(select[0]);
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
  hozzaadas(select) {
    if (!this.gelemek.includes(select[1]) && !this.gszinek.includes(select[0])) {
      this.gelemek.push = select[0];
      this.gszinek.push = select[1];
    }
    else {
      return select;
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
  hozzaadas(select) {
    let x = dkocka3.ertek + dkocka2.ertek;
    if (!this.belemek.includes(x) && (select[1] == 'blue' || select[1] == 'white')) {
      return this.belemek.push(x);
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
  hozzaadas(select) {
    if (select[0] != 'orange' && select[0] != 'white') {
      return select;
    }
    else if (this.starter == 0) {
      return this.starter = select[1];
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
  hozzaadas(){
    
  }




}