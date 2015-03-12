'use strict';

angular.module('eventApp')
    .controller('event_register', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $scope.item1 =[];    // 진행 항사 이벤트 list 배열
        $scope.item2 =[];    // 지난 항사 이벤트 list 배열


// 진행 행사 이벤트 list 함수
        executeResults.new_event_list().then(function(data) {
            $scope.item1 = data;
        });


// 지난 행사 이벤트 list 함수
        executeResults.old_event_list().then(function(data) {
            $scope.item2 = data;
        });



// 진행 행사 클릭시 디테일 함수
        $scope.new_list_click = function(event_ID){
            $scope.detail_show =1;

            for(var i = 0; i<$scope.item1.length; i++){
                if($scope.item1[i].event_ID == event_ID){
                    $scope.event_name = $scope.item1[i].event_name;
                    $scope.event_location = $scope.item1[i].event_location;
                    $scope.event_company = $scope.item1[i].event_company;
                    $scope.event_start = $scope.item1[i].event_start;
                    $scope.event_end = $scope.item1[i].event_end;
                    $scope.event_commnet = $scope.item1[i].event_commnet;
                    $scope.event_ID = event_ID;
                }
            }
        };




// 지난 행사 클릭시 디테일 함수
        $scope.old_list_click = function(event_ID){
            $scope.detail_show =1;   // ng-if 를 위한 변수  1일시 amend.html

            for(var i = 0; i<$scope.item2.length; i++){
                if($scope.item2[i].event_ID == event_ID){
                    $scope.event_name = $scope.item2[i].event_name;
                    $scope.event_location = $scope.item2[i].event_location;
                    $scope.event_company = $scope.item2[i].event_company;
                    $scope.event_start = $scope.item2[i].event_start;
                    $scope.event_end = $scope.item2[i].event_end;
                    $scope.event_commnet = $scope.item2[i].event_commnet;
                    $scope.event_ID = event_ID;
                }
            }
        };



// 추가 버튼 클릭시 detail창 초기화
        $scope.new_event_insert = function(){
            $scope.detail_show =2;       // ng-if 를 위한 변수  2일시 insert.html
            $scope.event_name = null;
            $scope.event_location = null;
            $scope.event_company = null;
            $scope.event_start = null;
            $scope.event_end = null;
            $scope.event_commnet = null;
        };








    });