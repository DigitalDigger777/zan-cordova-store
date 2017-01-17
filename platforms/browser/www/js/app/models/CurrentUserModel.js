/**
 * Created by korman on 24.11.16.
 */

define(['backbone'], function(Backbone){
    var urlRoot = requirejs.s.contexts._.config.urlRoot;

    var UserModel = Backbone.Model.extend({
        urlRoot: urlRoot + 'en/user/user/api/current'
    });

    return UserModel;
});