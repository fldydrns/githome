(function($) {
    var common = common || {};
    common = {
        postJson : function postJson(url, postdata, successCallback, failureCallback){
            $.ajax({
                  url: url,
                  type: "POST",
                  cache: false,
                  dataType: "json",
                  data: postdata,
                  success: successCallback,
                  error: failureCallback
                });
            }
    };
    try {
        window.common = common;
    } catch (e) {

    }
})(jQuery);
