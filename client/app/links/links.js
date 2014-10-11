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
    console.log('getting links: ', $scope.data.links);

  };
  $scope.getLinks();

});