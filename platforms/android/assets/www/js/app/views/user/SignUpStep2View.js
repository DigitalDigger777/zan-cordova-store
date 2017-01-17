/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/user/sign_up_step_2.html'
], function(Marionette, Backbone, template){
    return Marionette.View.extend({
        el: '#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render sign up step 2 help');
        }
    });
});