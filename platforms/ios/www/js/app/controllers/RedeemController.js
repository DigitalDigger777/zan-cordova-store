/**
 * Created by korman on 23.11.16.
 */

define(['model/CouponModel', 'view/coupon/ScanCouponView'], function(CouponModel, ScanCouponView){
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

                            //navigator.notification.alert(result.text);

                            var model = new CouponModel();
                            model.set('id', result.text);
                            model.fetch({
                                dataType:'jsonp',
                                success: function(model, response){
                                    //console.log('success', model, response);
                                    //console.log(model.get('barcodeContent'));
                                    //console.log(model.toJSON());
                                    //navigator.notification.alert(model.toJSON());
                                    //var scanCouponView = new ScanCouponView({
                                    //    model: model
                                    //});
                                    //scanCouponView.render();
                                    // window.location = '#coupon-list/1';
                                },
                                error: function(model, response){
                                    console.log('error', model, response);
                                }
                            });
                            //navigator.notification.prompt("Please enter name of data",  function(input){
                            //
                            //});
                        }

                        if (result.format == 'Fake') {
                            var model = new CouponModel();
                            model.set('id', result.text);
                            model.fetch({
                                dataType:'jsonp',
                                success: function(model, response){
                                    //console.log('success', model, response);
                                    //console.log(model.get('barcodeContent'));
                                    console.log(model.toJSON());

                                    var scanCouponView = new ScanCouponView({
                                       model: model
                                    });
                                    scanCouponView.render();
                                    // window.location = '#coupon-list/1';
                                },
                                error: function(model, response){
                                    console.log('error', model, response);
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
        redeem: function (id){
            console.log(id);
            var urlRoot = requirejs.s.contexts._.config.urlRoot;
            var userId = window.localStorage.getItem('scan-user-id');
            var token = window.localStorage.getItem('token-store');

            $.ajax({
                url: urlRoot + 'en/pass/api/user-coupon/redeem',
                method: 'post',
                dataType: 'jsonp',
                data: {
                    couponId: id,
                    userId: userId,
                    apikey: token,
                    method: 'PUT'
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