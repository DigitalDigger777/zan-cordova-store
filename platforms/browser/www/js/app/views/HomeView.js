/**
 * Created by korman on 01.12.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/home.html'
], function(Marionette, Backbone, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        el: '#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){

        }
    });
});
