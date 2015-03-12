'use strict';

angular.module('eventApp')
    .controller('noticeModCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

// 안내글 등록 수정 버튼
        $scope.noticeModGo = function(){
            if($scope.noticeComment==null||$scope.noticeComment==""){
                alert("안내글의 내용을 입력해 주세요");
                $("#noticeComment").focus();
                return;
            }
            if (confirm("수정 하시겠습니까?")) {
                alert("수정이 완료되었습니다");

// 안내글 수정 하기 noticeModGo
                executeResults.noticeModGo(sessionStorage.getItem('schedule_event_ID'),$scope.noticeComment,$scope.notice_ID).then(function (data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }
        };


// 안내글 등록 삭제 버튼 noticeDeletgo
        $scope.noticeDeletgo = function() {
            if (confirm("삭제 하시겠습니까?")) {
                alert("삭제가 완료되었습니다");
                executeResults.noticeDeletgo(sessionStorage.getItem('schedule_event_ID')).then(function (data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }
        }



    });