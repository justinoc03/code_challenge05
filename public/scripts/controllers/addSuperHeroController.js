myApp.controller('addSuperHeroController', ['$scope', '$http' ,function($scope, $http){
console.log('in addSuperHeroController');

  $scope.addHero = function() {

    console.log('button click');

    var heroToSend = {
      alias: $scope.alias,
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      power_name: $scope.power_name,
      city: $scope.city
    };

    this.product = heroToSend;

      //reset inputs
      $scope.alias = null;
      $scope.first_name = null;
      $scope.last_name = null;
      $scope.power_name = null;
      $scope.city = null;


    console.log('hero to send = ', heroToSend);

    $http({
      method: 'POST',
      url: '/addNewHero',
      data: heroToSend
      }).then(function(response){
      console.log('this is from the server', response);

  });
  };
}]);
