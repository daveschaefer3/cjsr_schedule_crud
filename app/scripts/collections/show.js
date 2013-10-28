/*global define*/

define([
    'underscore',
    'backbone',
    'models/show'
], function (_, Backbone, ShowModel) {
    'use strict';

    var ShowCollection = Backbone.Collection.extend({
      model: ShowModel,

      url: 'shows',

      initialize: function () {
        this.listenTo(this, 'change:name', this.sort);
      }
    });

    return ShowCollection;
});