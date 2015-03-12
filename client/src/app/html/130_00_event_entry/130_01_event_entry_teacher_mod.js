'use strict';

angular.module('eventApp')
    .controller('teacherModCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

// 강연자 수정 등록 teacherMod
        $scope.teacherMod = function() {

            if($scope.teacherName==null || $scope.teacherName==""){
                alert("성명을 입력해 주세요");
                $("#teacherName").focus();
                return;
            };
            if($scope.teacherParty==null || $scope.teacherParty==""){
                alert("연락처을 입력해 주세요");
                $("#teacherParty").focus();
                return;
            };
            if($scope.teacherCall==null || $scope.teacherCall==""){
                alert("소속을 입력해 주세요");
                $("#teacherCall").focus();
                return;
            };

            if (confirm("수정 하시겠습니까?")) {
                alert("수정이 완료되었습니다");

                executeResults.teacherMod(sessionStorage.getItem('schedule_event_ID'),$scope.teacherName,$scope.teacherParty,$scope.teacherCall,
                    $scope.teacherUserClassId,$scope.teacherUserId).then(function(data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }
        };


// 강연자 수정 등록 teacherDelete
        $scope.teacherDelete = function(){
            if (confirm("삭제 하시겠습니까?")) {
                alert("삭제가 완료되었습니다");

                executeResults.teacherDelete(sessionStorage.getItem('schedule_event_ID'),$scope.teacherUserClassId,$scope.teacherUserId).then(function(data) {
                        $scope.item1 = data;
                        location.reload();
                    });
            }
        }


    });