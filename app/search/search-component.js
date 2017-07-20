app.controller('SearchController', ['$window', 'SearchService', function ($window, SearchService) {

    var self = this;
    this.getData = function (search) {
        SearchService.getTeam(search).then(function (response) {
            self.team = [];
            self.team = response.data.articles;
            console.log(self.team);
        });
    };

}])
    .component('formComponent', {
        templateUrl: '/search/search.html',
        controller: 'SearchController'
    })

    .service('SearchService', ['$http', function ($http) {

        this.getTeam = function () {
            var url = 'https://api.myjson.com/bins/1ahfmv';
            return $http.get(url);
        };



    }]);


