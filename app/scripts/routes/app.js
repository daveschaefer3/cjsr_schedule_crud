/*global define*/

define([
    'jquery',
    'backbone',
    'views/app',
    'views/show',
    'views/shows'
], function ($, Backbone, AppView, ShowView, ShowsView) {
    'use strict';

    // var appView = new AppView;
    var AppRouter = Backbone.Router.extend({
        routes: {
          ''                  : 'index',
          'shows'             : 'shows',
          'shows/:id'         : 'show',
          'shows/:id/edit'    : 'showEdit'
        }
      });

    var initialize = function() {
      var app_router = new AppRouter;

      app_router.on('index', function(){
        var homeView = new AppView();
        homeView.render();
        console.log('Index route');
      });
      
      app_router.on('route:shows', function(){
        console.log('shows route');
        var showListView = new ShowsView();
        showListView.render();
      });

      app_router.on('route:show', function(id){
        console.log('show ' + id + ' route');
        var showView = new ShowView();
        showView.render();
      });

      app_router.on('route:defaultAction', function(actions){
        console.log('Index route');

        var homeView = new AppView();
        homeView.render();
      });

      Backbone.history.start();
    };

    return {
      initialize: initialize // AppRouter;
    }
});