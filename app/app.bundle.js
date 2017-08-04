/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_header_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_header_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header_header_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_carousel_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_carousel_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Shared_carousel_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__News_newsComponent__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__News_newsComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__News_newsComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sports_sports_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sports_sports_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sports_sports_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Ranking_ranking_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Ranking_ranking_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Ranking_ranking_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__search_search_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Stats_Stats_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Stats_Stats_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Stats_Stats_component__);








var app= angular.module('myApp',['ui.router']);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

  app.controller('SearchController', ['$window', 'SearchService', function ($window, SearchService) {

    var self = this;

    this.getData = function (search) {
        SearchService.getTeam(search).then(function (response) {
            self.team = [];
            self.team = response.data.articles;
          
            console.log(self.team);
        });
    };

    this.selectTeam=function(code){
        SearchService.getdetails(code).then(function(response){
          self.details = [];
          self.details=response.data.players;

          console.log(self.details);
        })
    }

}])
    .component('headerComponent', {
        templateUrl: '/Header/header.html',
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
        }


    }]);




/***/ }),
/* 2 */
/***/ (function(module, exports) {

var app=angular.module("myApp").component('carouselComponent',{
    templateUrl:'/shared/carousel.html',
   controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/jw7rb").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var app=angular.module("myApp");
app.component('newsComponent',{
    templateUrl:'/News/News-items.html',
   controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/v4uvz").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var app=angular.module("myApp");
app.component('sportsComponent',{
    templateUrl:'/sports/sports.html',
   controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/sr4gv").then(function(response) {
        $scope.myData = response.data.articles;

 })
   },
})


/***/ }),
/* 5 */
/***/ (function(module, exports) {

angular.module("myApp").component("rankingComponent",{
    templateUrl:'Ranking/ranking.html',
  controller: function($scope, $http) {
    $http.get("https://api.myjson.com/bins/13clhr").then(function(response) {
        $scope.myData = response.data.ranking;

 }),
     $http.get("https://api.myjson.com/bins/64lxr").then(function(response) {
        $scope.odiData = response.data.ranking;

 }),
     $http.get("https://api.myjson.com/bins/13clhr").then(function(response) {
        $scope.twentyData = response.data.ranking;

 }),
     $scope.orderByMe1 = function(x1) {
        $scope.myOrderBy1 = x1;
    },
    $scope.orderByMe2 = function(x2) {
        $scope.myOrderBy2 = x2;
        
   },
    $scope.orderByMe3 = function(x3) {
        $scope.myOrderBy3 = x3;
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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




/***/ }),
/* 7 */
/***/ (function(module, exports) {

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
          StatService.getFixture(name.id).then(function (response) {
            self.fixture = [];
            self.name = name.name;
            self.crest = name.crestUrl;
            self.fixture=response.data.fixtures;
            console.log(self.fixture);
        })
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
            self.showTeamDetails = true;
        })

     
    };
    this.selectLeague = function () {
        StatService.getLeague().then(function (response) {
            self.league = [];
          
            self.league = response.data.League;
            console.log(self.league);
        })
    }
    this.selectLeagueTeam = function (caption) {
        StatService.getTeams(caption.league).then(function (response) {
            self.leagueTeam = [];
              self.crestLeague=caption.crest;
            self.leaguename=caption.caption;
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

        this.getFixture=function (id)
        {
            var url = "http://api.football-data.org/v1/teams/" + id +"/fixtures";
            return $http.get(url);
        }

    }]);




/***/ })
/******/ ]);