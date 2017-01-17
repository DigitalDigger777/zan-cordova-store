/**
 * Created by korman on 04.01.17.
 */

define([
    'marionette',
    'backbone',
    'text!template/user/my_qr_code.html'
], function(Marionette, Backbone, template){
    return Marionette.View.extend({
        el: '#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render My QR');
        }
    });
});