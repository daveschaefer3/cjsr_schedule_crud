/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/shows',
    'views/show'
], function ($, _, Backbone, JST, ShowsView, ShowView) {
    'use strict';
    // var showsView = new ShowView();
    var AppView = Backbone.View.extend({
        el: '#app-view',

        events: {
          
        },

        initialize: function() {
            this.$showsView = this.$('#show-list-view');
            this.$showView = this.$('#show-view');
            this.$btnAddShow = this.$('#btn-add-show');

            console.log('AppView initialized');
            this.render();
            // this.showShows();
            // ShowsView.render();
        },

        render: function() {
            this.$el.html(this.template());
        },

        template: JST['app/scripts/templates/app.ejs'],

        showShows: function(shows) {
            this.$showsView.html(new ShowsView({collection: shows}).render().el);
            console.log('showShows function hit in AppView');
        }
    });

    return AppView;
});