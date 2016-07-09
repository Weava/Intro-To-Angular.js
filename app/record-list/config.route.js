/**
 * Configuration for url routes.
 */
(function() {
    'use strict';

    /**
     * Associate this route config with the introApp.recordList module.
     */
    angular
        .module('introApp.recordList')
        .config(config);

    // config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        /**
         * Sets template for which we will be routing to, as well as the controller for the view.
         */
        $routeProvider.when('/', {
            templateUrl: 'record-list/record-list.html',
            controller: 'RecordListController',
            controllerAs: 'vm'
        });
    }
})();