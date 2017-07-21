var app = angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlServiceProvider) {

        $urlServiceProvider.rules.otherwise({ state: 'home' });
        $stateProvider
            .state('home', {
                url: '/',
                template: '<header-component></header-component>' +
                '<carousel-component></carousel-component>' +
                '<sports-component></sports-component>'
            })
            .state('sports', {
                url: '/sports',
                template: '<header-component></header-component>' +
                '<carousel-component></carousel-component>' +
                '<sports-component></sports-component> '
            })
            .state('news', {
                url: '/news',
                template: '<header-component></header-component>' +
                '<carousel-component></carousel-component>' +
                '<news-component></news-component>'
            })

            .state('ranking', {
                url: '/ranking',
                template: '<header-component></header-component>' +
                '<carousel-component></carousel-component>' +
                '<ranking-component></ranking-component>'
            })
            .state('details', {
                url: '/teamdetails',
                template: '<teamdetails-component></teamdetails-component>'
            })
    })

