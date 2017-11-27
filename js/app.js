$(document).ready(function (){

  var corridas = [
    {
      "nome" : "IV Corrida da Independência Cajazeiras-PB",
      "pasta": "imagens/corridas/indepedencia-cajazeiras-pb",
      "fotos": [
        "capa.jpeg",
        "foto1.jpeg",
        "foto2.jpeg",
        "foto3.jpeg",
        "foto4.jpeg",
        "foto5.jpeg",
        "foto6.jpeg",
        "foto7.jpeg",
        "foto8.jpeg",
        "foto9.jpeg"
      ]
    }
  ];

  $("#corrida-indepedencia").hide();

  $("#img-corrida-independencia").click(function () {
    $("#corrida-indepedencia").fadeIn(300);
  });

  $(".close").click(function (){
    $(".slide-horizontal").hide();
  });
});
