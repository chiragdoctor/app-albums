angular.module('AlbumsApp.controllers', []).
    controller('albumsController', function ($scope, albumsAPIService) {
        $scope.albums = [];
        $scope.albumFilter = '';

        $scope.searchFilter = function (album) {
            var keyword = new RegExp($scope.albumFilter, 'i');
            return !$scope.albumFilter || keyword.test(album.name);
        };

        $scope.getAlbums = function () {
            albumsAPIService.getAlbums()
                .success(function (response) {
                    $scope.albums = response.albums;
                })
        }
    });