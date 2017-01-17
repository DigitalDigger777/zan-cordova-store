/**
 * Created by korman on 24.11.16.
 */

define(['backbone'], function(Backbone){
    var urlRoot = requirejs.s.contexts._.config.urlRoot;



    return Backbone.Model.extend({
            urlRoot: urlRoot + 'en/pass/api/user-coupon',
            updateNotification: function(success, error){
                var reg = /[\w\W]+?\/([0-9]+)/;
                var hashItems = reg.exec(window.location.hash);
                var id = hashItems[1];
                var time  = window.localStorage.getItem('time');
                var range = window.localStorage.getItem('range');
                var token = window.localStorage.getItem('token-store');


                if (time != null && range != null) {
                    $.ajax({
                        url: urlRoot + 'en/pass/api/user-coupon/update-notification',
                        method: 'GET',
                        dataType: 'jsonp',
                        data: {
                            id:id,
                            apikey: token,
                            time: time,
                            range: range
                        },
                        success: success,
                        error: error
                    });
                }
            },
            sync: function(method, model, options){
                console.log('sync?');
                return $.ajax({
                    method: 'GET',
                    dataType: 'jsonp',
                    url: this.urlRoot,
                    data: {
                        apikey: this.get('apikey'),
                        task: this.get('task'),
                        couponId: this.get('couponId')
                    },
                    success: this.get('success'),
                    error: this.get('error')
                });
            }
        });
});