/**
 * Created by hassna on 10/09/2015.
 */
angular.module("app").value("mvToastr",toastr);
angular.module("app").factory("notifier",["mvToastr",notifier]);
function notifier(mvToastr){
    return {
        notify:function(msg){
            mvToastr.success(msg);
        }
    }

}