// Ruleta.js

function Ruleta(x_rul, y_rul) {
    this.x_rul = x_rul;
    this.y_rul = y_rul;
    var porciones = new Array(38);
    bolita = new Bolita(x_rul, y_rul);

    var angulo = 0;

    for(var i = 0; i < porciones.length; i++) {

      var ax = radio * cos(PI * angulo);
      var ay = radio * sin(PI * angulo);
      angulo += 2 / porciones.length;
      var bx = radio * cos(PI * angulo);
      var by = radio * sin(PI * angulo);


      porciones[i] = new Porcion(ax, ay, bx, by, angulo, numeros[i]);
    }

    this.draw = function() {
      for(var i = 0; i < porciones.length; i++)
        porciones[i].draw();

      bolita.draw();

    }

    this.coronado = function() {
      text("CORONADO EL HACHE", 0, -80);
    }

}
