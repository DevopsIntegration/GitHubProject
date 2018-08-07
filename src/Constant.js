var app = angular.module('ecommerceApp');

app.factory('globalUrl', function () {
    return {
        BASE_GITHUB_URL: 'https://api.github.com',
        GITHUB_PRIVATE_KEY: 'Your Key Here'
    };
});