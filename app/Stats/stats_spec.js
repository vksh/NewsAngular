describe('Unit: Stats', function () {

    // Define global references for injections.
    var ctrl, messages;

    beforeEach(module('myApp'));
    
    beforeEach(module('ui.router'));

    beforeEach(inject(function ($controller, _Messages_) {
 

       
    }));

    describe('statsComponent', function () {
        // Test some basic expectations about the controller
        it('should have team defined', function () {
            expect(ctrl.team).toBeDefined();
        });

        it('should have details defined', function () {
            expect(ctrl.details).toBeDefined();
        });
        it('should have fixture defined', function () {
            expect(ctrl.fixture).toBeDefined();
        });
        it('should have league defined', function () {
            expect(ctrl.league).toBeDefined();
        });
    });

    describe('Test StatsService', function(){
    describe('when I call Sevice', function(){
        it('Fetch data from Url', function(){

            var $injector = angular.injector([ 'myApp' ]);
            var myService = $injector.get('StatService');
           var Url="/Data/competition/comp.json";
                    //something is missing here..
            expect(StatService).toHaveBeenCalledWith(Url)
        })

    })

});
});