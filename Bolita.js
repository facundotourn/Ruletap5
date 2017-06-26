function Bolita (x, y) {
  this.x = x;
  this.y = y;
  this.r = radio * 0.8;
  this.tam = 20;

  this.draw = function() {
    stroke(150);
    fill(200);
    ellipse(this.r * cos(angulo_b), this.r * sin(angulo_b), this.tam);
  }

  this.reubicar = function(angulo) {
    this.x = this.r * cos(angulo);
    this.y = this.r * sin(angulo);
  }

}
