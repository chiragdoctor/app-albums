angular.module('AlbumsApp.controllers', []).
    controller('albumsController', function ($scope, albumsAPIService) {
        $scope.albums = [];
        $scope.albumFilter = '';
        $scope.loggedInUser = {};
        $scope.isLoggedInState = false;
        $scope.searchFilter = function (album) {
            var keyword = new RegExp($scope.albumFilter, 'i');
            return !$scope.albumFilter || keyword.test(album.name);
        };


        albumsAPIService.loggedInUser()
            .success(function (response) {
                $scope.loggedInUser = response.user;
                if (response.user) {
                    $scope.isLoggedInState = true;
                }
            });

        $scope.logoutUser = function () {
            albumsAPIService.logoutUser()
                .success(function () {
                    $scope.loggedInUser = {};
                })
        }

        $scope.getAlbums = function () {
            albumsAPIService.getAlbums()
                .success(function (response) {
                    $scope.albums = response.albums;
                })
        }
    });