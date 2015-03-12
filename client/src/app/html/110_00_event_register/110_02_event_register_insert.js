'use strict';

angular.module('eventApp')
    .controller('event_register_insert', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


// 저장 버튼 누를시 이벤트 행사 신규 등록
        $scope.new_event_insert = function(){
            if(confirm("저장하시겠습니까?")){
                alert("저장이 완료되었습니다")
                executeResults.event_insert($scope.event_name,$scope.event_location,$scope.event_company
                    ,$scope.event_start,$scope.event_end,$scope.event_commnet).then(function(data) {
                        $scope.item3 = data;
                        location.reload();
                    });
            }
        };

    });