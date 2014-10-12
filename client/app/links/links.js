angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = { links: [] };

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data){
        $scope.data.links = data;
      })
      .catch(function(error){
        console.error(error);
      })
  };
  $scope.getLinks();

  $scope.addVisit = function(){
    console.log('adding a visit to: ', $scope.data.links.visits);
    return $scope.data.links.visits++;
  };
});