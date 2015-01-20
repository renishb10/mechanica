var app = angular.module('app', []);

app.controller('MainController',function($scope){
   $scope.sample = "Mechanica"
   $scope.jobs = [{name : "Renish", role : "Mechanic", pay : "20"},
                  {name : "John", role : "PunctureMan", pay : "10"},
                  {name : "Rudra", role : "Mechanic", pay : "30"}]
});