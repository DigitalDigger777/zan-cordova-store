/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/HomeController'], function(Marionette, HomeController){
    console.log('home router init');

    var HomeRouter = Marionette.AppRouter.extend({
        controller: HomeController,
        appRoutes: {
            'home':'home'
        }
    });

    return new HomeRouter();
});