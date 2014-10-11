angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {link: []};
  $scope.addLink = function(url){  
  console.log('adding a link: ', url);   
  Links.addLink(url)
      .then(function(data){
        $scope.link.link.push(data);
        console.log($scope);
      })
      .catch(function(error){
        console.error(error);
      })
};

});
