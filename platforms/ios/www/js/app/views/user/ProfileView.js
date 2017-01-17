/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/user/profile.html',
    'vendor/jquery_lazyload/jquery.lazyload'
], function(Marionette, template){
    return Marionette.View.extend({
        el: '#page-content-scroll',
        ui: {
            logoutButton: '#logout-button'
        },
        events: {
            'click @ui.logoutButton': function(e){
                e.preventDefault();
                window.localStorage.clear();
                window.location = '#login'

                $('#mobileMenuView').html('');
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
        }
    });
});