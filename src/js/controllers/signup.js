'use strict';

// signup controller
app.controller('SignupFormController', ['$scope','$localStorage','storeClient', function($scope,$localStorage,storeClient) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
        if(!storeClient.isNewClient($scope.user))
            $scope.authError ="the email is Already in use";


    };
  }])
 ;