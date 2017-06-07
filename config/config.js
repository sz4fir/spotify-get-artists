app.service('Config', [function () {
    var tokenType = 'Bearer';
    var url = 'https://api.spotify.com/v1/search';

    /*set your own authentication token here*/
    var token = '';
    /***************************************/

    this.setupValues = {
        tokenType: tokenType,
        token: token,
        url: url
    };
}]);