console.log('js is sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

//directly connects with index.html via the ng-app and ng-controller parts
//all the functions are located in each separate controller but they would work within this as well
myApp.controller( 'superController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG is sourced' );

}]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "partials/home.html",
        controller: "homeController"
      }).
      when("/addSuperHero", {
        templateUrl: "partials/addSuperHero.html",
        controller: "addSuperHeroController"
      }).
      when("/viewSuperHeroes", {
        templateUrl: "partials/viewSuperHeroes.html",
        controller: "viewSuperHeroesController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
