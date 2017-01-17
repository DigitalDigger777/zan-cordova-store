/**
 * Created by korman on 04.01.17.
 */

define([
    'marionette',
    'backbone',
    'text!template/user/change_pass.html'
], function(Marionette, Backbone, template){
    return Marionette.View.extend({
        el: '#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render Change Pass');
        }
    });
});