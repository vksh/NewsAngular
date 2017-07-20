var app=angular.module("myApp");
app.component('sportsComponent',{
    templateUrl:'/sports/sports.html',
   controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/sr4gv").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})
