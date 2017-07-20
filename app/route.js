   var app=angular.module('myApp',['ui.router'])
     .config(function ($stateProvider,$urlServiceProvider) {
        $urlServiceProvider.rules.otherwise({state:'portfoliopm'}); 
        $stateProvider
            .state('portfoliopm', {
                url:'/',
                //template:'<drafttable-component tabletype="draft"></table-component>'
                template: '<h1>Hii</h1>'
            })
            .state('sports',{
                url:'/sports',
                template:'<sports-component></sports-component> '
            })
            .state('news',{
                url:'/news',
                template:'<news-component></news-component>'
            })

    })

