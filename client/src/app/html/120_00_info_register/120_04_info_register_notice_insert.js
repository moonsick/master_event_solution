'use strict';

angular.module('eventApp')
    .controller('noticeInsertCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

// 안내글 등록 저장 버튼
        $scope.noticeInsertGo = function(){
            if($scope.noticeComment1==null||$scope.noticeComment1==""){
                alert("안내글의 내용을 입력해 주세요");
                $("#noticeComment1").focus();
                return;
            }
            if (confirm("저장 하시겠습니까?")) {
                alert("저장이 완료되었습니다");

//신규 안내글 등록 하기 noticeInsertGo
                executeResults.noticeInsertGo(sessionStorage.getItem('schedule_event_ID'), $scope.noticeComment1).then(function (data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }
        };

    });