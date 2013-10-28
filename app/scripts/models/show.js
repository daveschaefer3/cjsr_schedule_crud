/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ShowModel = Backbone.Model.extend({
        defaults: {
          name: 'Show Name'
        },

        initialize: function() {
          this.errors = [];
        },
        
        validate: function(attrs, options) {
          // clear the errors hash
          this.errors.length = 0;

          if (!attrs.hasOwnProperty('name') || 
            typeof attrs.name !== 'string' ||
            attrs.name.replace(/^\s+|s+$/g, '').length === 0) {
            this.errors.push('Name cannot be blank');
          }

          if (attrs.hasOwnProperty('id') && 
            (
              (parseInt(attrs.id, 10) != attrs.id) || 
              (parseInt(attrs.id, 10) < 1)
            )) {
            this.errors.push('Id must be a positive non-zero integer');
          }

          return this.errors.length;
        }
    });

    return ShowModel;
});