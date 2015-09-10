'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', [ '$scope','$localStorage','$location','identity', function($scope,$localStorage,$location,identity) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {


        if($localStorage.clients!==undefined) {
            var clients=$localStorage.clients;
            for(var i=0;i<clients.length;i++){
                if(clients[i].email==$scope.user.email&&clients[i].password==$scope.user.password){
                    identity.setClient($scope.user);
                    $location.url("/");
                    return;
                }
            }

        }

            $scope.authError="the email or the password is incorrect";
            console.log( $scope.authError)



    };
  }])
;