/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/show'
], function ($, _, Backbone, JST, ShowModel) {
    'use strict';

    var ShowView = Backbone.View.extend({
        model: new ShowModel,

        template: JST['app/scripts/templates/show.ejs'],

        events: {

        },

        initialize: function() {
          this.listenTo(this.model, 'change', this.render);
          this.listenTo(this.model, 'destroy', this.remove);
          this.listenTo(this.model, 'invalid', this.highlightError);
        },

        render: function() {
          this.$el.html(this.template());

          // hooks to view
          this.$errSpan = this.$('.errSpan');

          return this;
        },

        highlightError: function() {
          this.$errSpan.text('The name must be present');
        }
    });

    return ShowView;
});