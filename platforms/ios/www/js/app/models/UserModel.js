/**
 * Created by korman on 24.11.16.
 */

define(['backbone'], function(Backbone){
    var urlRoot = requirejs.s.contexts._.config.urlRoot;
    var token = window.localStorage.getItem('token-store');

    var UserModel = Backbone.Model.extend({
        urlRoot: urlRoot + 'en/user/user/rest?apikey=' + token
    });

    return UserModel;
});