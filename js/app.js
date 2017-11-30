$(document).ready(function() {

  var corridas = [{
    "nome": "IV Corrida da Independência Cajazeiras-PB",
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
  }];

  $("#corrida-indepedencia").hide();
  $("#corrida-sesc-iguatu-ce").hide();
  $("#corrida-sesc-crato-ce").hide();
  $("#viagem-crato-ce").hide();
  $("#viagem-serra-do-vital-pb").hide();
  $("#viagem-boa-vista-pb").hide();
  $(".image-full").hide();

  $("#img-corrida-independencia").click(function() {
    closeSlideHorizontal();
    $("#corrida-indepedencia").fadeIn(100);
    scrollTo("#corrida-indepedencia");
  });

  $("#img-corrida-sesc-iguatu-ce").click(function() {
    closeSlideHorizontal();
    $("#corrida-sesc-iguatu-ce").fadeIn(100);
    scrollTo("#corrida-sesc-iguatu-ce");
  });

  $("#img-corrida-sesc-crato-ce").click(function() {
    closeSlideHorizontal();
    $("#corrida-sesc-crato-ce").fadeIn(100);
    scrollTo("#corrida-sesc-crato-ce");
  });

  $("#img-viagem-crato-ce").click(function() {
    closeSlideHorizontal();
    $("#viagem-crato-ce").fadeIn(100);
    scrollTo("#viagem-crato-ce");
  });

  $("#img-viagem-boa-vista-pb").click(function() {
    closeSlideHorizontal();
    $("#viagem-boa-vista-pb").fadeIn(100);
    scrollTo("#viagem-boa-vista-pb");
  });

  $("#img-viagem-serra-do-vital-pb").click(function() {
    closeSlideHorizontal();
    $("#viagem-serra-do-vital-pb").fadeIn(100);
    scrollTo("#viagem-serra-do-vital-pb");
  });

  $(".close").click(function() {
    scrollBackDiv();
    closeSlideHorizontal();
  });

  $(".modal-image").click(function() {
    $(".image-full").hide();
  });

  $(".backdrop").click(function() {
    $(".image-full").hide();
  });

  $(".img-expanded").click(function() {

    var image = $(this);
    $("#image-full").attr("src", image.attr("src"));
    $("#image-full").attr("alt", image.attr("alt"));

    $(".image-full").fadeIn(300);
  });
});

function scrollTo(idDiv) {
  $('html, body').animate({
    scrollTop: $(idDiv).offset().top - 8
  }, 1000);
}

function scrollBackDiv() {
  $('html, body').animate({
    scrollTop: $(window).scrollTop() - 400
  }, 1000);
}

function closeSlideHorizontal() {
  $(".slide-horizontal").hide();
}
