/**
 * Created by hassna on 09/09/2015.
 */
angular.module('app')
    .directive('uiArtist',['$rootScope', function($rootScope) {
        return {
            restrict: 'E',

            templateUrl:'../src/tpl/ui_artist.html',
            scope:{
                artist:'=',
                addtofavorites:'&',
                removefromfavorites:'&',
                isfav:'='

            }
        };
    }]);




















