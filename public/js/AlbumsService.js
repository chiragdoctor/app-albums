angular.module('AlbumsApp.services', []).
    factory('albumsAPIService', function($http) {

        var albumsAPI = {};

        //albumsAPI.getIndex = function (){
        //  return $http.get('http://localhost:5123/');
        //};


        albumsAPI.loggedInUser = function(){
            return $http.get('http://localhost:5123/login');
        }

        albumsAPI.getAlbums = function() {
            return $http.get('http://localhost:5123/api/albums');
        };

        albumsAPI.logoutUser = function(){
            return $http.get('http://localhost:5123/logout');
        }

        return albumsAPI;
    });