angular.module('AlbumsApp.services', []).
    factory('albumsAPIService', function($http) {

        var albumsAPI = {};

        albumsAPI.loggedInUser = function(){
            return $http.get('/login');
        }

        albumsAPI.getAlbums = function() {
            return $http.get('/api/albums');
        };

        albumsAPI.logoutUser = function(){
            return $http.get('/logout');
        }

        return albumsAPI;
    });