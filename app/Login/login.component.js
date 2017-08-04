app



    .controller('LoginController', function ($scope, $rootScope, $stateParams, $state, LoginService) {
        $rootScope.title = "AngularJS Login Sample";

        $scope.formSubmit = function () {
            if (LoginService.login($scope.username, $scope.password)) {
                var key1 = 123465;
                var key2 = 12335;
                localStorage.setItem(key1, $scope.username);
                localStorage.setItem(key2, $scope.password);
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
                var user = localStorage.getItem(key1);
                console.log(user);
                $scope.success = "Logged In successfully";

            } else {
                $scope.error = "Incorrect username/password !";
            }
        };

        $scope.formSignup = function () {
            if (LoginService.signup($scope.username, $scope.password)) {
                console.log("data posted");

            }
        }

    })
    .component('loginComponent', {
        templateUrl: '/Login/login.component.html',
        controller: 'LoginController'


    })

    .service('LoginService', ['$http', function ($http) {
        var admin = 'admin';
        var pass = 'pass';
        var isAuthenticated = false;

        return {
            login: function (username, password) {

                isAuthenticated = username === admin && password === pass;

                return isAuthenticated;

            },
            isAuthenticated: function () {
                return isAuthenticated;
            },
            signup: function (username, password) {
                $http.post('/Data/login.json', { msg: 'hello word!' });
                console.log("function called");

            }


        };

    }]);

