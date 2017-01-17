/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/SignUpController'], function(Marionette, SignUpController){

    var SignUpRouter = Marionette.AppRouter.extend({
        controller: SignUpController,
        appRoutes: {
            'step-1': 'step1',
            'step-2': 'step2'
        }
    });

    return new SignUpRouter();
});