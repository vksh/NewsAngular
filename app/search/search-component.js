app.controller('SearchController', ['$window', 'SearchService', function ($window, SearchService,$scope) {

    var self = this;
    this.getData = function (search) {
        SearchService.getTeam(search).then(function (response) {
            self.team = [];
            self.team = response.data.articles;
            console.log(self.team);
        });
    };
        this.selectTeam=function(name){
        SearchService.getdetails(name.code).then(function(response){
          self.details = [];
         
          
          self.details=response.data.teamdetails;
           
          console.log(self.details);
          self.searchTeam="";
          
          
        })
    };

}])
    .component('teamdetailsComponent', {
        templateUrl: '/search/search.html',
        controller: 'SearchController'
    })

    .service('SearchService', ['$http', function ($http) {

        this.getTeam = function () {
            var url = 'https://api.myjson.com/bins/1ahfmv';
            return $http.get(url);
        };

 this.getdetails=function(string){
            var url="/Data/"+string+".json";
            return $http.get(url);
        };

    }]);


