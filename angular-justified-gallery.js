/*
 * Angular Justified Gallery 
 * (c) 2016 Jayesh Bhalodia
 * License: MIT
 */

(function() {

    'use strict';


    angular.module('angular-justified-gallery', []);


    angular.module('angular-justified-gallery').provider('angular-justified-gallery', function() {
        this.defaults = {
            rowHeight: 'bootstrap',
            position: 'top left',
            defaultValue: '',
            animationSpeed: 50,
            animationEasing: 'swing',
            change: null,
            changeDelay: 0,
            control: 'hue',
            hide: null,
            hideSpeed: 100,
            inline: false,
            letterCase: 'lowercase',
            opacity: false,
            show: null,
            showSpeed: 100
        };

        this.$get = function() {
            return this;
        };
    });

    angular.module('angular-justified-gallery').directive('justifiedGallery', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                images: '=images'
            },
            template: '<div class="angular-justified-gallery"><a ng-repeat="img in images" href="{{img.imageUrl}}"><img alt="{{img.title}}" src="{{img.imageUrl}}"/></a></div>',
            link: function($scope, element, attrs, ctrls, transclude) {
                $scope.$watch(function() {
                    return $scope.images;
                }, function(value) {
                    $timeout(function() {
                        element.justifiedGallery().on('jg.complete', function () {
                            $(this).find('a').colorbox({
                                maxWidth : '80%',
                                maxHeight : '80%',
                                opacity : 0.8,
                                transition : 'elastic',
                                current : ''
                            });
                        });
                    }, 100);
                }, true);
            }
        };
    }]);

})();