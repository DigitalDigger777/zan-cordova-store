/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/CouponController'], function(Marionette, CouponController){

    var CouponRouter = Marionette.AppRouter.extend({
        controller: CouponController,
        appRoutes: {
            'coupon-list/:page':'showList',
            'coupon-item/:id': 'showItem'
        }
    });

    return new CouponRouter();
});