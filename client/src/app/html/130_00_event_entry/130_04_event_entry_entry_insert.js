'use strict';

angular.module('eventApp')
    .controller('entryInsertCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


// 참가자 신규 추가 등록 entryInsert
        $scope.entryInsert = function() {

            if($scope.entryName1==null || $scope.entryName1==""){
                alert("성명을 입력해 주세요");
                $("#entryName1").focus();
                return;
            };
            if($scope.entryParty1==null || $scope.entryParty1==""){
                alert("소속을 입력해 주세요");
                $("#entryParty1").focus();
                return;
            };
            if($scope.entryCall1==null || $scope.entryCall1==""){
                alert("연락처을 입력해 주세요");
                $("#entryCall1").focus();
                return;
            };

            if (confirm("저장 하시겠습니까?")) {
                alert("저장이 완료되었습니다");
                executeResults.entryInsert(sessionStorage.getItem('schedule_event_ID'),$scope.entryName1,$scope.entryParty1,$scope.entryCall1).then(function(data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }

        }

    });