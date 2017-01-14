/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/list.html',
    'view/coupon/CouponItemView',
    'vendor/jquery_lazyload/jquery.lazyload'
], function(Marionette, template, CouponItemView){

    return Marionette.CompositeView.extend({
        el: '#page-content-scroll',
        childView: CouponItemView,
        childViewContainer: '#couponList',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Coupon list');
            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
        }
    });
});