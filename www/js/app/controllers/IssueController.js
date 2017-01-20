/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/ShopperCouponCollection',
    'view/coupon/ScanCouponView',
    'view/coupon/CouponCompositeView'
], function(ShopperCouponCollection, ScanCouponView, CouponCompositeView){
    return {
        scan: function(){
            //TODO: release scan
            console.log('scan');

            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    console.log(result);
                    if(!result.cancelled)
                    {
                        if(result.format == "QR_CODE")
                        {
                            navigator.notification.alert('Scan code ' + result.text);

                            window.localStorage.removeItem('scan-user-id');
                            window.localStorage.setItem('scan-user-id', result.text);

                            var collection = new ShopperCouponCollection();
                            collection.fetch({
                                success: function(collection, response){
                                    console.log(collection.toJSON());
                                    var couponCompositeView = new CouponCompositeView({
                                        collection: collection
                                    });
                                    couponCompositeView.render();
                                },
                                error: function(collection, response){
                                    console.log(response);
                                }
                            });
                        }

                        if (result.format == 'Fake') {
                            window.localStorage.removeItem('scan-user-id');
                            window.localStorage.setItem('scan-user-id', result.text);

                            var collection = new ShopperCouponCollection();
                            collection.fetch({
                                success: function(collection, response){
                                    console.log(collection.toJSON());
                                    var couponCompositeView = new CouponCompositeView({
                                        collection: collection
                                    });
                                    couponCompositeView.render();
                                },
                                error: function(collection, response){
                                    console.log(response);
                                }
                            });
                        }
                    }
                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        },
        send: function (id){
            console.log(id);
            var urlRoot = requirejs.s.contexts._.config.urlRoot;
            var userId = window.localStorage.getItem('scan-user-id');
            var token = window.localStorage.getItem('token-store');

            $.ajax({
                url: urlRoot + 'en/pass/api/user-coupon/0',
                method: 'post',
                dataType: 'jsonp',
                data: {
                    couponId: id,
                    userId: userId,
                    apikey: token,
                    method: 'POST'
                },
                success: function () {
                    navigator.notification.alert('Coupon was send', function(){

                    });
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    };
});