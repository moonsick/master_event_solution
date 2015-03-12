'use strict';

angular.module('eventApp')
    .controller('event_entry', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $scope.item1 =[];    // 진행 항사 이벤트 list 배열
        $scope.item2 =[];    // 지난 항사 이벤트 list 배열
        $scope.item3 =[];    // 강연자 LIST 담는 배열
        $scope.item4 =[];    // 참가자 LIST  담는 배열



// 진행 행사 이벤트 list 함수
        executeResults.new_event_list().then(function(data) {
            $scope.item1 = data;
        });


// 지난 행사 이벤트 list 함수
        executeResults.old_event_list().then(function(data) {
            $scope.item2 = data;
        });


//행사 클릭시 함수
        $scope.eventListClick = function (event_ID) {
            $scope.eventUserView = 1;      // ng-if 참가자 등록 보기  1일때 on  2일때 off

            //행사 클릭시 강연자 list teacherList
            executeResults.teacherList(event_ID).then(function (data) {
                $scope.item3 = data;
            });

            //행사 클릭시 참가라 list entryList
            executeResults.entryList(event_ID).then(function (data) {
                $scope.item4 = data;
            });
            sessionStorage.setItem('schedule_event_ID',event_ID);
        };




// 강연자 list 클릭시 함수
        $scope.teacherListClick = function(event_id,user_id){
            $scope.teacherModView =1;       // 강연자 수정 inputbox 보기  1: of , 2: off
            $scope.teacherInsertView =2;   // 강연자 추가 inputbox 보기  1: of , 2: off

            for(var i=0; i<$scope.item3.length; i++){
                if($scope.item3[i].event_ID==event_id&&$scope.item3[i].user_ID==user_id){
                    $scope.teacherName = $scope.item3[i].user_name;
                    $scope.teacherParty = $scope.item3[i].user_party;
                    $scope.teacherCall = $scope.item3[i].user_call;
                    $scope.teacherEventId = $scope.item3[i].event_ID;
                    $scope.teacherUserClassId = $scope.item3[i].user_class_ID;
                    $scope.teacherUserId = $scope.item3[i].user_ID;
                };
            };
        };

// 참가자 list 클릭시 함수 entryListClick
        $scope.entryListClick = function(event_id,user_id){
            $scope.entryModView =1;       // 참가자 수정 inputbox 보기  1: of , 2: off
            $scope.entryInsertView =2;   // 참가자 추가 inputbox 보기  1: of , 2: off

            for(var i=0; i<$scope.item4.length; i++){
                if($scope.item4[i].event_ID==event_id&&$scope.item4[i].user_ID==user_id){
                    $scope.entryName = $scope.item4[i].user_name;
                    $scope.entryParty = $scope.item4[i].user_party;
                    $scope.entryCall = $scope.item4[i].user_call;
                    $scope.entryEventId = $scope.item4[i].event_ID;
                    $scope.entryUserClassId = $scope.item4[i].user_class_ID;
                    $scope.entryUserId = $scope.item4[i].user_ID;
                };
            };
        };






//강연자 등록 추가 버튼 함수
        $scope.teacherInsertButtom = function(){
            $scope.teacherModView =2;       // 강연자 수정 inputbox 보기  1: of , 2: off
            $scope.teacherInsertView =1;   // 강연자 추가 inputbox 보기  1: of , 2: off
        };


//참가자 등록 추가 버튼 함수
        $scope.entryInsertButtom = function(){
            $scope.entryModView =2;       // 참가자 수정 inputbox 보기  1: of , 2: off
            $scope.entryInsertView =1;   // 참가자 추가 inputbox 보기  1: of , 2: off
        };





        $scope.teacherTab = function(){
            $scope.teacherModView =2;       // 강연자 수정 inputbox 보기  1: of , 2: off
            $scope.teacherInsertView =2;   // 강연자 추가 inputbox 보기  1: of , 2: off
        };
        $scope.entryTab = function(){
            $scope.teacherModView =2;       // 강연자 수정 inputbox 보기  1: of , 2: off
            $scope.teacherInsertView =2;   // 강연자 추가 inputbox 보기  1: of , 2: off
        }
    });