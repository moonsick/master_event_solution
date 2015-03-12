'use strict';

angular.module('eventApp')
    .controller('teacherInserCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


// 강연자 신규 추가 등록 teacherInsert
            $scope.teacherInsert = function() {

                if($scope.teacherName1==null || $scope.teacherName1==""){
                    alert("성명을 입력해 주세요");
                    $("#teacherName1").focus();
                    return;
                };
                if($scope.teacherParty1==null || $scope.teacherParty1==""){
                    alert("소속을 입력해 주세요");
                    $("#teacherParty1").focus();
                    return;
                };
                if($scope.teacherCall1==null || $scope.teacherCall1==""){
                    alert("연락처을 입력해 주세요");
                    $("#teacherCall1").focus();
                    return;
                };

                if (confirm("저장 하시겠습니까?")) {
                    alert("저장이 완료되었습니다");
                    executeResults.teacherInsert(sessionStorage.getItem('schedule_event_ID'),$scope.teacherName1,$scope.teacherParty1,$scope.teacherCall1).then(function(data) {
                        $scope.item1 = data;
                        location.reload();
                    });
                }

            }
    });