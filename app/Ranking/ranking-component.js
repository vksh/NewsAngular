angular.module("myApp").component("rankingComponent",{
    templateUrl:'Ranking/ranking.html',
  controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/13clhr").then(function(response) {
        $scope.myData = response.data.ranking;

 }),
     $http.get("https://api.myjson.com/bins/64lxr").then(function(response) {
        $scope.odiData = response.data.ranking;

 }),
     $http.get("https://api.myjson.com/bins/13clhr").then(function(response) {
        $scope.twentyData = response.data.ranking;

 }),
     $scope.orderByMe1 = function(x1) {
        $scope.myOrderBy1 = x1;
    },
    $scope.orderByMe2 = function(x2) {
        $scope.myOrderBy2 = x2;
        
   },
    $scope.orderByMe3 = function(x3) {
        $scope.myOrderBy3 = x3;
    }
  }
});