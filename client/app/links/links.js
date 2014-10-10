angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {links: []};

  $scope.getLinks = function(){
    Links.getLinks()    // $scope.data
      .then(function(){
        $location.path('/links');
      })
      .catch(function(error){
        console.error(error);
      })
  };

});


  // $scope.signin = function () {
  //   Auth.signin($scope.user)
  //     .then(function (token) {
  //       $window.localStorage.setItem('com.shortly', token);
  //       $location.path('/links');
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
