angular.module('AlbumsApp.controllers', []).
    controller('albumsController', function($scope, albumsAPIService) {
        $scope.albums = [];

        albumsAPIService.getAlbums()
            .success(function(response){
                $scope.albums = response.albums;
            })
    });