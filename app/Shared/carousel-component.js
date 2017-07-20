var app=angular.module("myApp").component('carouselComponent',{
    templateUrl:'/shared/carousel.html',
   controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/jw7rb").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})