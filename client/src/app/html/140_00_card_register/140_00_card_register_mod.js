'use strict';

angular.module('eventApp')
    .controller('cardModCtr', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {


//카드 저장 누를시 cardMod
        $scope.cardMod = function(){

            if($scope.cardModName==null||$scope.cardModName==""){
                alert("성명을 입력해 주세요");
                $("#cardModName").focus();
                return;
            }
            if($scope.cardModParty==null||$scope.cardModParty==""){
                alert("소속을 입력해 주세요");
                $("#cardModParty").focus();
                return;
            }

            if (confirm("저장 하시겠습니까?")) {
                alert("저장이 완료되었습니다");
                executeResults.cardMod($scope.event_id, $scope.user_class_id, $scope.user_id,
                    $scope.cardModName, $scope.cardModParty, $scope.cardModNfc).then(function (data) {
                        $scope.item4 =data;
                        location.reload();
                    });
            }
        };

    });