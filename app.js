
var app= angular.module('myApp',[]);


app.controller('customersCtrl', function($scope, $http) {
    $http.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=cef8cccc6c7847f1a2af97cd48c937fd").then(function(response) {
        $scope.myData = response.data.articles;

			console.log($scope.myData.author);
    });

});