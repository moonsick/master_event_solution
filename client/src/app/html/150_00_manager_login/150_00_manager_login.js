'use strict';

angular.module('eventApp')
    .controller('manager_login', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


        $scope.id;
        $scope.pass;


        $scope.login_go = function(){
            executeResults.login($scope.id,$scope.pass).then(function(data) {
                $scope.item = data;

                if($scope.item[0].name=='error'){
                    alert("아이디나 비밀번호가 틀렸습니다.");
                }
                else {
                    alert("로그인 하였습니다")
                    sessionStorage.setItem('aaa',1);
                    location.reload();
                }
            });
        };
    });