/**
 * Created by hassna on 10/09/2015.
 */
app.controller('ProfileCtrl',
    ['$scope','identity', function ( $scope,identity) {


        $scope.user=identity.currentUser;

        $scope.myImage='';
        $scope.myCroppedImage='';
        $scope.cropType="square";
        $scope.saveImg=function(){
            identity.setImgUrl($scope.user.imgUrl);

        }
        var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];

            var reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function($scope){
                    $scope.myImage=evt.target.result;


                });
            };

            reader.readAsDataURL(file);
            $scope.user.imgUrl=URL.createObjectURL(file);

        };

        angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
    }]
);