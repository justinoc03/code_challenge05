myApp.controller('viewSuperHeroesController', ['$scope', '$http' ,function($scope, $http){
console.log('in viewSuperHeroesController');

  $scope.showHeros = [];

  $scope.getHeros = function () {
    console.log('in getHeros');
    $http({
      method: 'GET',
      url: '/getHeroes'
    }).then(function success(responseObject) {
      console.log('got these superheros from server=', responseObject);
      $scope.showHeros = responseObject.data;
    }, function error(errorObject){
      console.log(errorObject);
    });
    console.log($scope.showHeros);
  };

}]);//end viewSuperHeroesController
