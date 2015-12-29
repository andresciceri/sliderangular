"use strict";

/**
 * @ngdoc function
 * @name conectateApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the slider home app
 */
angular.module('sliderjs')
  .controller('HomeCtrl', function ($scope, $http,$window) {

  $scope.slides = [
    {image: "img/img00.jpg", description: "Image 00"},
    {image: "img/img01.jpg", description: "Image 01"},
    {image: "img/img02.jpg", description: "Image 02"},
    {image: "img/img03.jpg", description: "Image 03"}
  ];

  $scope.direction = "left";
  $scope.currentIndex = 0;

  $scope.setCurrentSlideIndex = function (index) {
      $scope.direction = (index > $scope.currentIndex) ? "left" : "right";
      $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
  };

  $scope.prevSlide = function () {
      $scope.direction = "left";
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function () {
      $scope.direction = "right";
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  };

}).animation(".slide-animation", function () {
  return {
    beforeAddClass(element, className, done) {
        var scope = element.scope();

        if (className === "ng-hide") {
            var finishPoint = element.parent().width();
            if(scope.direction !== "right") {
                finishPoint = -finishPoint;
            }
            TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
        }
        else {
            done();
        }
    },
    removeClass(element, className, done) {
        var scope = element.scope();

        if (className === "ng-hide") {
            element.removeClass("ng-hide");

            var startPoint = element.parent().width();
            if(scope.direction === "right") {
                startPoint = -startPoint;
            }

            TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
        }
        else {
            done();
        }
    }
  };
});
