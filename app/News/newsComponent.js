var app=angular.module("myApp");
app.component('newsComponent',{
    templateUrl:'/News/News-items.html',
   controller: function($scope, $http) {
    $http.get("https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=cef8cccc6c7847f1a2af97cd48c937fd").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})
