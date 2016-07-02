(function() {
    'use strict';

    angular
        .module('introApp.recordList')
        .config(config);

    // config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/', {
            templateUrl: 'record-list/record-list.html',
            controller: 'RecordListController',
            controllerAs: 'vm'
        });
    }
})();