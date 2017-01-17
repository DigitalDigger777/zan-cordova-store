/**
 * Created by korman on 23.11.16.
 */

define([
    'view/HomeView'
], function(HomeView){
    console.log('Home init controller');
    return {
        home: function(){
            var homeView = new HomeView();
            homeView.render();
            console.log('home render');
        }
    }
});