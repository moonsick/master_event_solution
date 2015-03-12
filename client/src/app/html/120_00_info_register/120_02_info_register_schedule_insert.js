'use strict';

angular.module('eventApp')
    .controller('scheduleInsertCtrl', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $scope.item1 = [];  //강연자 이름 목록 배열


        if(sessionStorage.getItem('teacher_name')==1){
            $("#teacher_name1").empty();
            $("#teacher_name1").append("<option value=''>강연자가 존재하지 않습니다</option>");
        };

// 강의자 이름 불러오기
        executeResults.teacher_name_list(sessionStorage.getItem('schedule_event_ID')).then(function (data) {
            $scope.item1 = data;

            if($scope.item1[0].name == "error"){
                $("#teacher_name1").empty();
                $("#teacher_name1").append("<option value=''>강연자가 존재하지 않습니다</option>");
                sessionStorage.setItem('teacher_name',1);
            }
            else{
                $("#teacher_name1").empty();
                $("#teacher_name1").append("<option value=''>강연자를 선택해 주세요</option>");
                for(var i=0; i<$scope.item1.length; i++){
                    $("#teacher_name1").append("<option value='"+$scope.item1[i].user_name+'+'+$scope.item1[i].user_ID+"'>"+$scope.item1[i].user_name+"</option>");
                };
                sessionStorage.setItem('teacher_name',2);
            }
        });


// eelect box 강연자 이름 없을시
        $scope.teacher_list1 = function(){
            if(sessionStorage.getItem('teacher_name')==1){
                alert("강연자가 존재하지 않습니다\n" +
                "강연자를 등록해 주세요\n\n" +
                "등록 방법 : 참가자 등록 -> 강연자 등록")
            }
        };



// 저장 누를시 일정 추가 등록
        $scope.eventScheduleInsert = function() {

            if($scope.schedule_seq1==null||$scope.schedule_seq1=="")
            {
                alert("강연 순서를 입력해 주세요");
                $("#schedule_seq1").focus();
                return;
            }
            if($scope.lecture1==null||$scope.lecture1=="")
            {
                alert("강연 장소를 입력해 주세요");
                $("#lecture1").focus();
                return;
            }

            if (confirm("저장하시겠습니까?")) {
                alert("저장이 완료되었습니다")
                executeResults.eventScheduleInsert(sessionStorage.getItem('schedule_event_ID'), $scope.schedule_seq1, $scope.lecture1, $scope.teacher_name1).then(function (data) {
                    $scope.item1 = data;
                    location.reload();
                });
            }
        }

    });