var app = angular.module("app");

app.controller("CorridasController", ["$scope", "CorridasService", function($scope, CorridasService) {

  CorridasService.retornaCorridas(function (res){
    $scope.corridas = res;
  });
}]);
