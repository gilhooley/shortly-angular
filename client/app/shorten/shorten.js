angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = [];

  $scope.addLink = function(){  // isValid
    // if (isValid) { 
  console.log('adding a link');   
  Links.addLink($location)
      .then(function(data){
        // console.log("ADDING LINK DATA: ", data);
        $scope.link = data;
        $location.path('/links');
      })
      .catch(function(error){
        console.error(error);
      })
  // };
};

});
