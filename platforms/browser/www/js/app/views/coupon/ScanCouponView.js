/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/scan_coupon.html',
    'model/UserCouponModel'
], function(Marionette, template, UserCouponModel){

    return Marionette.View.extend({
        el: '#page-content-scroll',
        ui: {
            addButton: '[href="#add-coupon"]'
        },
        events: {
            'click @ui.addButton': function(e){
                e.preventDefault();
                console.log('add coupon');
                console.log(e.currentTarget);
                var token = window.localStorage.getItem('token-store');
                var couponId = $(e.currentTarget).attr('data-coupon-id');

                var userCoupon = new UserCouponModel({
                    apikey: token,
                    task: 'save',
                    couponId: couponId
                });
                userCoupon.save(null, {
                    success: function(model, response){
                        console.log(model.toJSON());
                        navigator.notification.alert('Coupon added');
                    },
                    error: function(model, response){
                        console.log('error' + model.toJSON());
                    }
                });
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Scan coupon item');

            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
        }
    });
});