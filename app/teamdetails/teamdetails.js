angular.module("myApp")
.component("teamComponent",{
    templateUrl:"/teamdetails/teamdetails.html",
    controller:function($scope,$http){
      var url = "/Data/mu.json" ;
      console.log(url);
      $http.get(url).then(function(response){
          $scope.myData=response.data.players;
          console.log($scope.myData);

      });
    }
});