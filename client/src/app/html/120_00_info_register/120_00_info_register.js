'use strict';

angular.module('eventApp')
    .controller('info_register', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $scope.item1 = [];    // 진행 항사 이벤트 list 배열
        $scope.item2 = [];    // 지난 항사 이벤트 list 배열
        $scope.item3 = [];    // 강의 목록 담는 배열
        $scope.item4 = [];    // 강연자 이름만 출력 배열
        $scope.item5 = [];    // 안내글 list 받기 배열


        $scope.event_totalschedule_view = 1;




// 진행 행사 이벤트 list 함수
        executeResults.new_event_list().then(function (data) {
            $scope.item1 = data;
        });






// 지난 행사 이벤트 list 함수
        executeResults.old_event_list().then(function (data) {
            $scope.item2 = data;
        });





//  행사 클릭시  함수
        $scope.schedule_list_click = function (event_ID) {
            $scope.event_totalschedule_view = 2;
            $scope.noticeModView = 2;
            $scope.noticeInsertView = 2;

// 강의 목록
            executeResults.event_schedule_list(event_ID).then(function (data) {
                $scope.item3 = data;


                if($scope.item3[0].name=="error"){
                    $scope.scheduleView = 1;

                    executeResults.teacher_name_list(event_ID).then(function (data) {
                        $scope.item4 = data;

                        if($scope.item4[0].name == "error"){
                            sessionStorage.setItem('teacher_name',1);
                        }
                        else{
                            sessionStorage.setItem('teacher_name', 2);
                        }
                    });
                }
                else{
                    $scope.scheduleView = 2;
                }
            });

// 안내글 list noticeList
            executeResults.noticeList(event_ID).then(function (data) {
                $scope.item5 = data;
                if($scope.item5[0].name=="error"){
                    $scope.noticeListView = 1;
                }
                else{
                    $scope.noticeListView = 2;
                }
            });


            $scope.event_schedule_view = 2;
            sessionStorage.setItem('schedule_event_ID',event_ID);
        };









// 일정 클릭시
        $scope.schedule_mod = function(schedule_ID,event_ID,user_class_ID){
            $scope.event_schedule_view = 1;
            for(var i = 0; i<$scope.item3.length; i++){
                if($scope.item3[i].schedule_ID == schedule_ID&&$scope.item3[i].user_class_ID==user_class_ID){
                    $scope.schedule_seq = $scope.item3[i].schedule_seq;
                    $scope.lecture = $scope.item3[i].lecture;
                    $scope.userId = $scope.item3[i].user_ID;
                    $scope.scheduleId = $scope.item3[i].schedule_ID;
                }
            };
        };




//일정 등록 추가 버튼 누를시
        $scope.schedule_insert = function(){
            $scope.event_schedule_view = 3;
            $scope.scheduleView = 2;
        };


// 안내글 list 클릭시
        $scope.noticeClick = function(event_id,notice_id){
            $scope.noticeModView = 1;
            $scope.noticeInsertView = 0;
            $scope.noticeComment = $scope.item5[0].notice_comment;
            $scope.notice_ID = notice_id;

        };



//안내글 등록 추가 버튼 누릴시
        $scope.noticeInsert = function(){
            $scope.noticeListView = 2;
            $scope.noticeModView = 0;
            $scope.noticeInsertView = 1;
        };




    });


var insert_go = function(){
    document.a.submit();
}