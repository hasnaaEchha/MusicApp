/**
 * Created by hassna on 09/09/2015.
 */
angular.module("app").factory("storeClient",["$localStorage","$location","identity",storeClient]);
function storeClient($localStorage,$location,identity) {

    return {

        isNewClient: function (user) {
          if($localStorage.clients==undefined)
               $localStorage.clients=[];
          if($localStorage.clients.indexOf(user)<0)
          {
              $localStorage.clients.push(user);
              identity.setClient(user);
              $location.url("/");
              return true;
          }
            else
              return false
        }


    }
}