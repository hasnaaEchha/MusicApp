/**
 * Created by hassna on 09/09/2015.
 */
angular.module("app").factory("listArtist",["resources","favorites","identity","$q","$location","$localStorage",manageList]);
function manageList(resources,favorites,identity,$q,$location,$localStorage) {
    var types=["movie","music","musicVideo","shortFilm","tvShow","all"];
    return {

        getArtistes: function (term, type) {
            var def = $q.defer();
            if(term.length==0){
                term="a";
            }
            resources.ItunesSearch.get({term: term, type: type}, function (result) {

                    def.resolve(result);
                },
                function (err) {

                })
            return def.promise;
        },
        getArtist: function (id) {
            var def = $q.defer();

            resources.ArtistSearch.get({id: id}, function (result) {

                    def.resolve(result);
                },
                function (err) {

                })
            return def.promise;
        },
        getTracks: function (id,entity) {
            var def = $q.defer();

            resources.ArtistSearch.get({id: id,entity:entity,limit:10}, function (result) {

                    def.resolve(result);
                },
                function (err) {

                })
            return def.promise;
        },

        getTypes:function(){
            return types;
        },
        addToFavorites:function(artiste){
            if(identity.isAuthenticated()){

                favorites.add(artiste);

            }
            else{
                console.log("nooo")
                $location.url("access/signin");
            }

        },
        removeFromFavorites:function(artist){
                favorites.remove(artist.trackId);


        },
        isFavorite:function(trackId){
            var tab=$localStorage.favorites;
            if(tab){
                for(var  i=0;i<tab.length;i++){
                    if(tab[i].trackId===trackId){
                        return true
                    }
                }
            }

            return false;


        },
        getPaginationConfig:function(){
            return {
                maxSize : 6,
                bigTotalItems :100,
                bigCurrentPage : 1,
                currentPage :1
            }
        }


    }
}