var app = angular.module("app");

app.service("CorridasService", [function(){

  var corridas = [
    {
      "nome" : "IV Corrida da Independência Cajazeiras-PB";
      "pasta": "imagens/corridas/indepedencia-cajazeiras-pb";
      "fotos": [
        "capa.jpeg";
        "foto1.jpeg";
        "foto2.jpeg";
        "foto3.jpeg";
        "foto4.jpeg";
        "foto5.jpeg";
        "foto6.jpeg";
        "foto7.jpeg";
        "foto8.jpeg";
        "foto9.jpeg";
        "foto10.jpeg";
      ]
    }
  ];

  this.retornaCorridas = function(callback){
    callback(corridas);
  }

}]);
