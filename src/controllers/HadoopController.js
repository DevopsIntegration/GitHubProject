var app = angular.module("ecommerceApp");

app.controller('HadoopController', ['$scope', '$sce', function($scope, $sce, $http) {
   $scope.hadoopUrl = $sce.trustAsResourceUrl('https://www.sas.com/en_us/insights/big-data/hadoop.html');
}]);
