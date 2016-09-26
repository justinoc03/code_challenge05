myApp.controller('viewSuperHeroesController', ['$scope', '$http' ,function($scope, $http){
console.log('in viewSuperHeroesController');


  $scope.getHeros = function () {
    $http({
      method: 'GET',
      url: '/viewSuperHeroes'
    }).then(function success(responseObject) {
      console.log('got these superheros from server=', responseObject);
      $scope.getHeros = responseObject.data;
    }, function error(errorObject){
      console.log(errorObject);
    });
  };

}]);//end viewSuperHeroesController
