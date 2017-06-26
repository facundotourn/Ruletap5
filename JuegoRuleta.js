// JuegoRuleta.js
var ruleta;
var radio = 250;
var angulo_b = 0;

var acc_b = 0;
var vel_b = 0;
var bool_bolM = 0.004;
var bool_bolF = 0.005;
var frenar_acelerar = 1;

var random_a;
var random_b;

var numeros = ["0", "28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34", "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29", "12", "8", "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2"];

//var numeros = [00, 1, 13, 36, 24, 3, 15, 34, 22, 5, 17, 32, 20, 7, 11, 30, 9, 28, 0, 2, 14, 35, 23, 4, 16, 33, 21, 6, 18, 31, 19, 8,
               //12, 29, 25, 10, 27];

function movimientoBolita(cambio) {
  acc_b = acc_b + cambio;
  vel_b = vel_b + acc_b;

  random_a = random(0.1, 0.3);

  angulo_b = angulo_b + (PI * 2 / (random(30, 40) * random(30, 40))) * vel_b * random_a + (PI * 2 / (38 * 38)) * acc_b * random_b;
}

function frenarBolita(cambio) {
    if(vel_b > 0) {
      acc_b = acc_b - cambio / 1.2;
      vel_b = vel_b + acc_b;

      var offset1 = (PI * 2 / (random(30, 40) * random(30, 40)));
      var offset2 = (PI * 2 / (38 * 38));

      random_a = random(0.1, 0.3);
      angulo_b = angulo_b + offset1 * vel_b * random_a + offset2 * acc_b * random_b;
    } else {
      angulo_b = angulo_b;
      acc_b = 0;
      vel_b = 0;
    }
}

// Armar todo antes de que arranque el programa
function setup() {
  createCanvas(800, 800);

  random_a = random(0.1, 0.2);
  random_b = random(0.1, 0.2);

//ruleta = new Ruleta(width / 2, heigth / 2, 500);
  ruleta = new Ruleta(width / 2, height / 2);
  var angulo = 0;

  buttonGirar = createButton('Girar ruleta');
  buttonGirar.position(width / 2 - buttonGirar.width / 2, height / 2 - buttonGirar.height / 2);
  buttonGirar.mousePressed(girarRuleta);

  buttonCoronar = createButton('Coronar');
  buttonCoronar.position(width / 2 - buttonCoronar.width / 2, height / 2 - buttonCoronar.height / 2  + 25);
  buttonCoronar.mousePressed(coronado);


}

function girarRuleta() {
  angulo_b = random(PI / 2 * random(38));
  //bolita.reubicar(PI / 2 * random(38));
  frenar_acelerar *= -1;
}

// Ejecuta 60 veces por segundo
function draw() {
  translate(width / 2, height / 2);
  background(0);
  ruleta.draw();

  noFill();
  stroke(255)
  ellipse(0, 0, radio * 2 * 0.85);

  fill(0);
  ellipse(0, 0, radio * 2 * 0.75);

  var hache = random(250, 350);

  if(vel_b < 200 && frenar_acelerar < 0)
    movimientoBolita(bool_bolM);
  else {
    frenarBolita(bool_bolF);
    frenar_acelerar = 1;
  }

  ruleta.coronado();

  strokeWeight(4);

  stroke(255);
  noFill();
  ellipse(0, 0, radio * 2 * 1.1);

  strokeWeight(1);
  console.log(angulo_b);


}

function coronado() {
  if(vel_b != 0) {
    console.log("Espera papa");
  } else {
    console.log(angulo_b);
  }
}

function mousePressed() {

}
