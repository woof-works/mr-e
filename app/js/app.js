'use script';

var app = angular.module('app', ['controllers', 'ui.router', 'oc.lazyLoad', ]);

app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
  });

  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('mr', {
      url: '/',
      templateUrl: 'app/views/list.html',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
              name: 'app',
              files: [
                
              ]
            }),
            $ocLazyLoad.load({
              name: 'ngSanitize',
              files: ['bower_components/angular-sanitize/angular-sanitize.js']
            })
        }
      }
    })
    .state('mr.home', {
      url: 'home',
      controller: 'ListController',
      templateUrl: 'app/views/list.html',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'sbAdminApp',
            files: [
              'app/scripts/controllers/list.js'
            ]
          });
        }
      }
    });
}]);


var controllers = angular.module('controllers', []);

controllers.controller('ListController', ['$scope', function ($scope, $http) {

}]);