// App module
define([
    'backbone',
    'routes/app',
    'views/app'
], function (Backbone, 
    AppRouter, AppView) {
    
    var initialize = function() {
        console.log('App initialized');
        var appView = new AppView;
        AppRouter.initialize();

    };

    return {
        initialize: initialize
    };
});