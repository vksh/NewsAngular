var app=angular.module("myApp");
app.component('newsComponent',{
    templateUrl:'/News/News-items.html',
   controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/v4uvz").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})
