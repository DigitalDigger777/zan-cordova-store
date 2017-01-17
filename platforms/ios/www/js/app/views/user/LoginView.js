/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/user/login.html',
    'view/HeaderView',
    'view/MobileMenuView'
], function(Marionette, Backbone, template, HeaderView, MobileMenuView){
    return Marionette.View.extend({
        el: '#page-content-scroll',
        ui: {
            loginButton: '[href="#login"]'
        },
        events: {
            'click @ui.loginButton': function(e){
                e.preventDefault();
                var urlRoot = requirejs.s.contexts._.config.urlRoot;

                console.log('click create login');

                var email = $('[name="email"]').val();
                var password = $('[name="password"]').val();

                $.ajax({
                    url: urlRoot + 'en/core-user/rest/api-auth',
                    dataType:'jsonp',
                    method: 'GET',
                    data: {
                        email: email,
                        password: password
                    },
                    success: function(data){
                        console.log(data.token);
                        window.localStorage.setItem('token-store', data.token);
                        window.location.hash = '#home';

                        var header = new HeaderView();
                        header.render();

                        var mobileMenu = new MobileMenuView();
                        mobileMenu.render();
                    },
                    error: function(error){
                        console.log(error);
                    }
                });
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render Login', app);

        }
    });
});