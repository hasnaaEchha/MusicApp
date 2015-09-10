/**
 * Created by hassna on 09/09/2015.
 */
app.controller('MusicHCtrl',
    ['identity','$scope','$timeout','listArtist', function (identity, $scope,$timeout,listArtist) {
        $scope.identity=identity;
        $scope.listArtist=listArtist;
        $scope.search=function()
        {

            listArtist.getArtistes($scope.selected,'music').then(function(result){
                $scope.artists=result.results;

              console.log($scope.artists[0])
            });
        }
        $scope.addToFav=function(artist){
            listArtist.addToFavorites(artist);
        }
        $scope.removeFromFav=function(artist){
            listArtist.removeFromFavorites(artist);
        }


    }]
);