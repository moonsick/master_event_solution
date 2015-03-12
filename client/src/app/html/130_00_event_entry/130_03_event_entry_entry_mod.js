'use strict';

angular.module('eventApp')
    .controller('entryModCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

// 참가자 수정 등록 entryMod
        $scope.entryMod = function() {

            if($scope.entryName==null || $scope.entryName==""){
                alert("성명을 입력해 주세요");
                $("#entryName").focus();
                return;
            };
            if($scope.entryParty==null || $scope.entryParty==""){
                alert("연락처을 입력해 주세요");
                $("#teacherParty").focus();
                return;
            };
            if($scope.entryCall==null || $scope.entryCall==""){
                alert("소속을 입력해 주세요");
                $("#entryCall").focus();
                return;
            };

            if (confirm("수정 하시겠습니까?")) {
                alert("수정이 완료되었습니다");

                executeResults.entryMod(sessionStorage.getItem('schedule_event_ID'),$scope.entryName,$scope.entryParty,$scope.entryCall,
                    $scope.entryUserClassId,$scope.entryUserId).then(function(data) {
                        $scope.item1 = data;
                        location.reload();
                    });
            }
        };


// 참가자 삭제 등록 entryDelete
        $scope.entryDelete = function(){
            if (confirm("삭제 하시겠습니까?")) {
                alert("삭제가 완료되었습니다");

                executeResults.entryDelete(sessionStorage.getItem('schedule_event_ID'),$scope.entryUserClassId,$scope.entryUserId).then(function(data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }
        }

    });