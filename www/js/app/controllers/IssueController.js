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
                                    window.location = '#coupon-list/1';
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
                                    //console.log(model.toJSON());

                                    //var scanCouponView = new ScanCouponView({
                                    //    model: model
                                    //});
                                    //scanCouponView.render();
                                    window.location = '#coupon-list/1';
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
        send: function (id){
            console.log(id);
        }
    };
});