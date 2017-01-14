/**
 * Created by korman on 01.12.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/mobile_menu.html'
], function(Marionette, Backbone, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        el: '#mobileMenuView',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){

        }
    });
});
