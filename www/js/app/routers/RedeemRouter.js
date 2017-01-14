/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/RedeemController'], function(Marionette, RedeemController){

    var RedeemRouter = Marionette.AppRouter.extend({
        controller: RedeemController,
        appRoutes: {
            'redeem/scan':'scan',
            'redeem/redeem/:id': 'redeem'
        }
    });

    return new RedeemRouter();
});