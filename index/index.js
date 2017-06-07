var app = angular.module('app', []);

app.controller('SearchController', ['$scope','$http','$timeout','Config', function ($scope, $http, $timeout,Config) {
    $scope.query = '';
    $scope.artists = [];

    function searchAlbums() {
        $http.get(Config.setupValues.url, {
                params: {
                    q: '*' + $scope.query+'*',
                    type: 'artist'
                },
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": Config.setupValues.tokenType + " " + Config.setupValues.token
                }
            })
            .then(function (response) {
                if(response) {
                    $scope.artists = [];
                    $scope.artists = response.data.artists.items;
                }
            });
    }

    var timeout = null;
    $scope.queryChanged = function (){
        if(timeout){
            $timeout.cancel(timeout);
        }
        timeout = $timeout(searchAlbums, 500);
    };
}]);