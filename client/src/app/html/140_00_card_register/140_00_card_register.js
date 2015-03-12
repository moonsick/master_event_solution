'use strict';

angular.module('eventApp')
    .controller('card_register', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.item1 =[];    // 진행 항사 이벤트 list 배열
        $scope.item2 =[];    // 지난 항사 이벤트 list 배열
        $scope.item3 =[];    // 카드 List 담는 배열
        $scope.item4 =[];



// 진행 행사 이벤트 list 함수
        executeResults.new_event_list().then(function(data) {
            $scope.item1 = data;
        });


// 지난 행사 이벤트 list 함수
        executeResults.old_event_list().then(function(data) {
            $scope.item2 = data;
        });


// 진행+지난 행사 클릭시  함수 cardList
        $scope.cardList = function(event_ID) {
            executeResults.cardList(event_ID).then(function(data) {
                $scope.item3 = data;
            });
            $scope.cardListView =1;
        };


// 카드 List 클릭 cardListClick
        $scope.cardListClick = function(event_id,user_class_id,user_id){
            for(var i=0; i<$scope.item3.length; i++){
                if($scope.item3[i].event_ID==event_id && $scope.item3[i].user_class_ID==user_class_id && $scope.item3[i].user_ID==user_id){
                    $scope.cardModView = 1;

                    $scope.cardModName = $scope.item3[i].user_name;
                    $scope.cardModParty = $scope.item3[i].user_party;
                    $scope.cardModNfc = $scope.item3[i].NFC_LID;
                    $scope.event_id = $scope.item3[i].event_ID;
                    $scope.user_class_id = $scope.item3[i].user_class_ID;
                    $scope.user_id = $scope.item3[i].user_ID;

                };
            }
        };





    });