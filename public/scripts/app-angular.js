angular.module('starterApp', [
    'ngNewRouter',
    'starterApp.hello',
    'starterApp.todo'
])
    .controller('AppController', ['$router', AppController]);

function AppController($router) {
    $router.config([
        {
            path: '/',
            component: '/hello'
        },
        {
            path: '/about',
            component: 'about'
        },
        {
            path: '/todo',
            component: 'todo'
        }
    ]);
}

/*
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $routeProvider.
        when('/about', {
            templateUrl: '/views/about.html'
        }).
        when('/todo', {
            templateUrl: '/views/todo.html',
            controller: 'todoController'
        }).
        otherwise({
            templateUrl: '/views/main.html'
        });
  }]);
*/