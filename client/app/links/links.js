angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {links: []};

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data){
        $scope.data.links = data;
        // $location.path('/links');
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
