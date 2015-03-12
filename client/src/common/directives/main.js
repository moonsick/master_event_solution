'use strict';

angular.module('eventApp')
    .controller('MainCtrl', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $http.get('/api/awesomeThings').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.sideClass= function(index){
            $scope.index=index;
            console.log("INDEX"+index);
        }


        if(sessionStorage.getItem('aaa')==null||sessionStorage.getItem('aaa')==2)
        {
            $rootScope.layout = false;
            console.log("로그아웃 일때 동작 합니다");
        }
        else if(sessionStorage.getItem('aaa')==1){
            $rootScope.layout = true;
            console.log("로그인 일때 동작 합니다");
        }


    });