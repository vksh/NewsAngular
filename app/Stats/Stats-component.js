app.controller('StatsController', ['$window', 'StatService', function ($window, StatService, $scope) {

    var self = this;
    this.getTeamsSheet = function (search) {
        StatService.getTeams(search).then(function (response) {
            self.team = [];
            self.team = response.data.teams;
            console.log(self.team);
        });
    };
    this.selectTeam = function (name) {
        StatService.getdetails(name.id).then(function (response) {
            self.details = [];
            self.name = name.name;
            self.crest = [];
            self.crest = name.crestUrl;
            self.details = response.data.players;
            console.log(self.details);
            self.searchTeam = "";
            self.showTeams = true;
              self.showleague = true;
            self.showTeamDetails=true;
        })
    };
    this.selectLeague = function () {
        StatService.getLeague().then(function (response) {
            self.league = [];
            self.league = response.data.League;
            console.log(self.league);
        })
    }
    this.selectLeagueTeam = function (leagueName) {
        StatService.getTeams(leagueName).then(function (response) {
            self.leagueTeam = [];
            self.leagueTeam = response.data.teams;
            console.log(self.leagueTeam);
            self.showleague = true;
        })
    }

}])
    .component('statsComponent', {
        templateUrl: '/Stats/stats.html',
        controller: 'StatsController'
    })



    .service('StatService', ['$http', function ($http) {

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

    }]);


