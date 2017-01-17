/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/user/login_help.html'
], function(Marionette, Backbone, template){
    return Marionette.View.extend({
        el: '#page-content-scroll',
        ui: {
            loginButton: '.login-button'
        },
        events: {
            'click @ui.loginButton': function(e){
                e.preventDefault();
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render Login help');
        }
    });
});