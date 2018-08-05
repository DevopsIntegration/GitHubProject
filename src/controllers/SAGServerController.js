var app = angular.module("ecommerceApp");

app.controller('SAGServerController', ['$scope', '$sce', function($scope, $sce, $http) {
   $scope.sagUrl = $sce.trustAsResourceUrl('https://www.talend.com/');
}]);
