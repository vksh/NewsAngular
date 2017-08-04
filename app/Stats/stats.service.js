  export default angular.module('myApp').service('StatService', ['$http', function ($http) {

        this.getTeams = function (search) {
            var url = "/Data/League/" + search + ".json";

            return $http.get(url);
        };
        this.getLeague = function () {
            var url = '/Data/competition/comp.json';
            return $http.get(url);
        };
        this.getdetails = function (id) {
            var url = "http://api.football-data.org/v1/teams/" + id + "/players";
            return $http.get(url);
        };

        this.getFixture=function (id)
        {
            var url = "http://api.football-data.org/v1/teams/" + id +"/fixtures";
            return $http.get(url);
        }

    }]);

    