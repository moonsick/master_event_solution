'use strict';

angular.module('eventApp')
    .controller('event_register_amend', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

// 수정 버튼 누를시 동작 함수
        $scope.old_event_amend = function(){
            if(confirm("수정 하시겠습니까?")){
                alert("수정이 완료되었습니다");
                executeResults.event_amend($scope.event_ID,$scope.event_name,$scope.event_location,$scope.event_company
                    ,$scope.event_start,$scope.event_end,$scope.event_commnet).then(function(data) {
                        $scope.item3 = data;
                        location.reload();
                    });
            }
        };



// 종료 버튼 누를시 동작 함수
        $scope.old_event_end = function(){
            if(confirm("종료 하시겠습니까?")){
                alert("행사가 종료 되었습니다");
                executeResults.event_end($scope.event_ID).then(function(data) {
                        $scope.item3 = data;
                        location.reload();
                    });
            }
        };


// 삭제 버튼 누를시 동작 함수
        $scope.event_delete = function(){
            if(confirm("삭제 하시겠습니까?")){
                alert("행사가 삭제 되었습니다");
                executeResults.event_delete($scope.event_ID).then(function(data) {
                    $scope.item3 = data;
                    location.reload();
                });
            }
        };
    });