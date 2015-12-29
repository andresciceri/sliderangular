'use strict';

/**
 * @ngdoc overview
 * @name conectateApp
 * @description
 * # conectateApp
 *
 * Main module of the application.
 */
var app = angular
  .module('sliderjs', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        label: 'Inicio'
      })
      .when("/error", {
        templateUrl: "views/error.html"
      })
      .otherwise({
        redirectTo: '/'
      });
  });