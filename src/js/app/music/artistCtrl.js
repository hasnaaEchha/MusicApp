/**
 * Created by hassna on 10/09/2015.
 */
app.controller('ArtistCtrl',
    ['identity','$scope','$stateParams','listArtist', function (identity, $scope,$stateParams,listArtist) {
        $scope.identity=identity;

            var i=listArtist.getArtist($stateParams.id).then(function(result){
                $scope.artist=result.results[0];
                console.log(result);
            });
        i=listArtist.getTracks($stateParams.id,"album").then(function(result){
            result.results.shift();
            $scope.tracks=result.results;

            console.log($scope.tracks);
        });




    }]
);