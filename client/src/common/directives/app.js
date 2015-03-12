'use strict';

var app = angular.module('eventApp', [
    'ngRoute',
    'angularFileUpload',
    'ui.bootstrap',
    'ngCookies'
]);
app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/src/app/html/110_00_event_register/110_00_event_register.html'
            })
            /*.when('/kang', {
                redirectTo: '/'
            })*/
            .when('/info_register', {
                templateUrl: '/src/app/html/120_00_info_register/120_00_info_register.html'
            })
            .when('/event_entry', {
                templateUrl: '/src/app/html/130_00_event_entry/130_00_event_entry.html'
            })
            .when('/card_register', {
                templateUrl: '/src/app/html/140_00_card_register/140_00_card_register.html'
            })
            .when('/test', {
                templateUrl: '/src/app/html/test/110_01_event_register_mod.html'
            })
            /*.otherwise({
                redirectTo: '/'
            });*/

        $locationProvider.html5Mode(true);
    });

app.directive('ngConfirmClick', [
    function(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('click', function(e){
                    var message = attrs.ngConfirmClick;
                    if(message && !confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

