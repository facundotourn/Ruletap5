function Porcion(ax, ay, bx, by, angulo, numero) {
  this.a = [ax, ay];
  this.b = [bx, by];
  this.angulo = angulo;
  this.numero = numero;
  this.colori = [1, 2, 3];
  this.colorchar = 'n';

  if(this.numero == 28 || this.numero == 26 || this.numero == 11 || this.numero == 20 || this.numero == 17 || this.numero == 22 ||
       this.numero == 15 || this.numero == 24 || this.numero == 13 || this.numero == 10 || this.numero == 29 || this.numero == 8 ||
       this.numero == 31 || this.numero == 6 || this.numero == 33 || this.numero == 4 || this.numero == 35 || this.numero == 2) {
    this.colori = [255, 255, 255];
  } else if(this.numero == 0) {
    this.colori = [0, 254, 0];
  } else {
    this.colori = [254, 0, 0];
  }

  this.draw = function() {
    stroke(255);

    //ellipseMode(CENTER);
    //arc(0, 0, this.a[0], this.a[1], this.angulo - PI * 2/38, this.angulo, PIE);

    line(0, 0, this.a[0], this.a[1]);
    line(0, 0, this.b[0], this.b[1]);
    line(this.a[0], this.a[1], this.b[0], this.b[1]);
    textAlign(CENTER, CENTER);
    textSize(15);
    fill(this.colori[0], this.colori[1], this.colori[2]);
    stroke(this.colori[0], this.colori[1], this.colori[2]);
    //fill(255);

    text(this.numero, radio*0.9 * sin(PI * this.angulo - PI * 2/38), radio*0.9 * cos(PI * this.angulo - PI * 2/38));
    //line(this.a[0] * 0.75, this.a[1] * 0.75, this.b[0] * 0.75, this.b[1] * 0.75);
  }

  this.contains = function() {

  }

  this.esNegro = function() {
    return (this.color == 28 || this.color == 26 || this.color == 11 || this.color == 20 || this.color == 17 || this.color == 22 ||
         this.color == 15 || this.color == 24 || this.color == 13 || this.color == 10 || this.color == 29 || this.color == 8 ||
         this.color == 31 || this.color == 6 || this.color == 33 || this.color == 4 || this.color == 35 || this.color == 2);
  }


}
