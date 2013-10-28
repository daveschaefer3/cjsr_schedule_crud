/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/show'
], function ($, _, Backbone, JST, ShowCollection) {
    'use strict';

    var ShowsView = Backbone.View.extend({
        el: '#show-list-view', // this should be written with a hook in the AppView

        collection: new ShowCollection,

        template: JST['app/scripts/templates/shows.ejs'],

        events: {

        },

        initialize: function() {
          this.listenTo(this.collection, 'add', this.render);
          this.listenTo(this.collection, 'sort', this.render);
          this.listenTo(this.collection, 'remove', this.render);

          console.log('ShowsView initialized');
        },

        render: function() {
          console.log('ShowsView rendered');
          this.$el.html(this.template({ShowCollection: this.collection.toJSON()}));
          return this;
        }
    });

    return ShowsView;
});