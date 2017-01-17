/**
 * Created by korman on 22.11.16.
 */

define([
    'backbone',
    // 'view/ReceivedCompositeView',
    // 'collection/ReceivedCollection',
    'view/HeaderView',
    'view/MobileMenuView',
    'view/HomeView',
    'router/HomeRouter',
    'router/CouponRouter',
    'router/RedeemRouter',
    'router/IssueRouter',
    // 'router/FriendRouter',
    // 'router/MessageRouter',
    'router/ProfileRouter',
    // 'router/ReceivedRouter',
    // 'router/ScanRouter',
    // 'router/StoreRouter',
    'router/SignUpRouter'
], function(Backbone, HeaderView, MobileMenuView, HomeView){


    var zan = Backbone.Marionette.Application.extend({

        onStart: function(options){

            var token = window.localStorage.getItem('token-store');
            console.log(token);
            Backbone.history.start();

            if (window.localStorage.getItem('token-store') !== null) {

                // var receivedList = new ReceivedCollection();
                //
                // receivedList.fetch({
                //     success: function(collection, response){
                //         console.log(collection.toJSON());
                //         var receivedListView = new ReceivedCompositeView({
                //             collection: receivedList
                //         });
                //
                //         receivedListView.render();
                //     },
                //     error: function(collection, response){
                //         console.log('Error');
                //     }
                // });
                var home = new HomeView();
                home.render();

                var header = new HeaderView();
                header.render();

                var mobileMenu = new MobileMenuView();
                mobileMenu.render();
            } else {
                //Backbone.history.navigate('#login', true);
                window.location.hash = '#login'
            }
        }
    });

    return zan;
});