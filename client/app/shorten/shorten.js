angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {link: []};

  $scope.addLink = function(){
    Links.addLink()
      .then(function(data){
        $scope.link.link = data;
        // $location.path('/links');
      })
      .catch(function(error){
        console.error(error);
      })
  };

});
