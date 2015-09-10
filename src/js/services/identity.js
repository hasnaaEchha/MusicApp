/**
 * Created by hassna on 09/09/2015.
 */
angular.module("app").factory("identity",["$cookieStore","$location","$window","$localStorage",identity]);
function identity($cookieStore,$location,$window,$localStorage){
    return {
        currentUser:  $cookieStore.get('client'),
        isAuthenticated: function(){
            this.currentUser=$cookieStore.get('client');
            return !!this.currentUser;
        },
        setClient:function(client){
            client.imgUrl="img/d0.png";
            $cookieStore.put('client',client)
        },
        setImgUrl:function(imgUrl){
            var client=$cookieStore.get('client');
            client.imgUrl=imgUrl;
            $cookieStore.put('client',client)

        },
        logout:function(){
            if($cookieStore.get('client'))
                $cookieStore.remove('client');
            $localStorage.favorites=undefined;
            $location.url("/");
            $window.location.reload();
        }
    }
}
