angular.module('AlbumsApp', [
    'ngRoute',
    'AlbumsApp.controllers',
    'AlbumsApp.services'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'login.html', controller: 'albumsController'}).
            when('/logout', {templateUrl: 'logout.html', controller: 'albumsController'}).
            when('/albums', {templateUrl: 'albums.html', controller: 'albumsController'})
    }]);


