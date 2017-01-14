/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/detail.html',
    'vendor/jquery_lazyload/jquery.lazyload'
], function(Marionette, template){

    return Marionette.View.extend({
        el:'#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render coupon detail');

            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
        }
    });
});