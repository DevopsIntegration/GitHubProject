var app = angular.module("ecommerceApp", [
      "ui.router", 'ui.bootstrap'
]);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$sceProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider) {

      $sceProvider.enabled(false);
      $urlRouterProvider.otherwise('/');

      $stateProvider
            .state('dashboard', {
                  url: "/",
                  templateUrl: "src/views/dashboard.html",
                  controller: "HtmlController"
            })

            .state('hadoop', {
                  url: "/hadoop",
                  templateUrl: "src/views/hadoop.html",
                  controller: "HadoopController"
            })

            .state('sagserver', {
                  url: "/sag-server",
                  templateUrl: "src/views/sagserver.html",
                  controller: "SAGServerController"
            })

            .state('html1', {
                  url: "/html1",
                  templateUrl: "src/views/html1.html",
                  controller: "HtmlController"
            })

            .state('html2', {
                  url: "/html2",
                  templateUrl: "src/views/html2.html",
                  controller: "HtmlController"
            })

            .state('html3', {
                  url: "/html3",
                  templateUrl: "src/views/html3.html",
                  controller: "HtmlController"
            })

      $locationProvider.html5Mode(true);


}]).run();