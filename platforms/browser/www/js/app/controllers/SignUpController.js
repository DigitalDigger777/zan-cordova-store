/**
 * Created by korman on 23.11.16.
 */

define([
    'view/user/SignUpStep1View',
    'view/user/SignUpStep2View'
], function(SignUpStep1View, SignUpStep2View){
    return {
        step1: function(){
            //TODO: release show coupon list
            console.log('sign up step 1');
            var signUpStep1 = new SignUpStep1View();
            signUpStep1.render();

        },
        step2: function(){
            //TODO: release show item list
            console.log('sign up step 2');
            var signUpStep2 = new SignUpStep2View();
            signUpStep2.render();
        }
    }
});