angular.module('AlbumsApp.services', []).
    factory('albumsAPIService', function($http) {

        var albumsAPI = {};

        albumsAPI.getAlbums = function() {
            return $http.get('http://localhost:5123/api/albums');
        }

        return albumsAPI;
    });