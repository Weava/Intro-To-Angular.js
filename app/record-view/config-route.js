(function() {
    'use strict';

    angular
        .module('introApp.recordView')
        .config(config);

    // config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/record/:id', {
            templateUrl: 'record-view/record-view.html',
            controller: 'RecordViewController',
            controllerAs: 'vm'
        });
    }
})();