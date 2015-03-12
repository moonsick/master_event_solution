'use strict';

angular.module('eventApp')
    .controller('schedule_mod', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
            $scope.item1 = [];  //강연자 이름 목록 배열


// 강의자 이름 불러오기
        executeResults.teacher_name_list(sessionStorage.getItem('schedule_event_ID')).then(function (data) {
            $scope.item1 = data;

            if($scope.item1[0].name == "error"){
                $("#teacher_name").empty();
                $("#teacher_name").append("<option value=''>강연자가 존재하지 않습니다</option>");
                sessionStorage.setItem('teacher_name',1);
            }
            else{
                $("#teacher_name").empty();
                $("#teacher_name").append("<option value=''>강연자를 선택해 주세요</option>");
                for(var i=0; i<$scope.item1.length; i++){
                    $("#teacher_name").append("<option value='"+$scope.item1[i].user_name+'+'+$scope.item1[i].user_ID+"'>"+$scope.item1[i].user_name+"</option>");
                };
                sessionStorage.setItem('teacher_name',2);
            }
        });



// eelect box 강연자 이름 없을시
$scope.teacher_list = function(){
    if(sessionStorage.getItem('teacher_name')==1){
        alert("강연자가 존재하지 않습니다\n" +
        "강연자를 등록해 주세요\n\n" +
        "등록 방법 : 참가자 등록 -> 강연자 등록")
    }
};


// 수정 버튼 누를시 일정 등록 수정 eventScheduleMod
        $scope.eventScheduleMod = function(){
            if($scope.schedule_seq==null||$scope.schedule_seq=="")
            {
                alert("강연 순서를 입력해 주세요");
                $("#schedule_seq").focus();
                return;
            }
            if($scope.lecture==null||$scope.lecture=="")
            {
                alert("강연 장소를 입력해 주세요");
                $("#lecture").focus();
                return;
            }

            if (confirm("수정 하시겠습니까?")) {
                alert("수정이 완료되었습니다");
                executeResults.eventScheduleMod(sessionStorage.getItem('schedule_event_ID'), $scope.schedule_seq, $scope.lecture, $scope.userId, $scope.scheduleId).then(function (data) {
                    $scope.item2 = data;
                    location.reload();
                });
            }
            };






// 삭제 버튼 누를시 일정 등록 수정 eventScheduleDelete
        $scope.eventScheduleDelete = function(){
            if (confirm("삭제 하시겠습니까?")) {
                alert("삭제가 완료되었습니다");
                executeResults.eventScheduleDelete(sessionStorage.getItem('schedule_event_ID'), $scope.schedule_seq, $scope.lecture, $scope.userId, $scope.scheduleId).then(function (data) {
                    $scope.item2 = data;
                    location.reload();
                });
            }
        }

    });

