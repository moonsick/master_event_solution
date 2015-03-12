'use strict';

angular.module('eventApp')
    .controller('header', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.logout = function(){
            alert("로그아웃 하셨습니다")
            sessionStorage.setItem('aaa',2);
            location.href = "/";
        }
    });