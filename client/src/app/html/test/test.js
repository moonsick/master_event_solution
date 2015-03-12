'use strict';

angular.module('eventApp')
    .controller('TooltipDemoCtrl', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


            $scope.dynamicTooltip = 'Hello, World!';
            $scope.dynamicTooltipText = 'dynamic';
            $scope.htmlTooltip = "I\'ve been made <b>bold</b>!";

    });