'use script';

var app = angular.module('app', ['ui.router', 'oc.lazyLoad', ]);

app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
  });

  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('mr', {
      url: '/',
      templateUrl: 'app/views/main.html',
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
            });
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
            files: [
              'app/scripts/controllers/list.js'
            ]
          });
        }
      }
    }).state('mr.new', {
      url: 'new',
      controller: 'NewController',
      // templateUrl: 'app/views/new.html',
      template: '<h1>test</h1>',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: [
              'app/scripts/controllers/new.js'
            ]
          });
        }
      }
    });
}]);
