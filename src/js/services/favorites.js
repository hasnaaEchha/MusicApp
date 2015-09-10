/**
 * Created by hassna on 09/09/2015.
 */
angular.module("app").factory("favorites",["$localStorage",favorites]);
function favorites( $localStorage) {
    return {

        add: function (artist) {
            if(!$localStorage.favorites)
                $localStorage.favorites=[];
            $localStorage.favorites.push(artist);


        },
        getFavorites:function(){
            return $localStorage.favorites;
        },
        remove:function(trackId){
            var tab=$localStorage.favorites;
            for(var  i=0;i<tab.length;i++){
                if(tab[i].trackId===trackId){
                    tab.splice(i,1);
                }
            }


        }




    }
}