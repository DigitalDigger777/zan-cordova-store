/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/ProfileController'], function(Marionette, ProfileController){

    var ProfileRouter = Marionette.AppRouter.extend({
        controller: ProfileController,
        appRoutes: {
            'profile':'showProfile',
            'change-password': 'changePass',
            'my-qr-code': 'myQrCode',
            'login': 'login',
            'login-help': 'loginHelp',
            'logout': 'logout'
        }
    });

    return new ProfileRouter();
});