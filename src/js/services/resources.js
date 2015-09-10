/**
 * Created by hassna on 09/09/2015.
 */
(function(){
    "use strict";
    angular.module("app")
        .service('resources',['$resource',Resources]);
    function Resources($resource){
        return{
            ItunesSearch:$resource('https://itunes.apple.com/:action', {
                    action: "search",
                    callback: 'JSON_CALLBACK'
                }, {
                    get: {
                        method: 'JSONP'
                    }
                }
            ),
            ArtistSearch:$resource('https://itunes.apple.com/lookup', {
                    action: "search",
                    callback: 'JSON_CALLBACK'
                }, {
                    get: {
                        method: 'JSONP'
                    }
                }
            ),
            TrackSearch:$resource('https://itunes.apple.com/search', {
                    action: "search",
                    callback: 'JSON_CALLBACK'
                }, {
                    get: {
                        method: 'JSONP'
                    }
                }
            )



        }
    }
}())

