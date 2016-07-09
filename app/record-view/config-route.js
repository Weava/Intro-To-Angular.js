/**
 * Route configuration for introApp.recordView. Handles where the url will take the user.
 */
(function() {
    'use strict';

    /**
     * Associate route config with introApp.recordView module.
     */
    angular
        .module('introApp.recordView')
        .config(config);

    // config.$inject = ['$locationProvider', '$routeProvider'];

    /**
     * Function to deal with figuring out where route will take us, and what properties that route should have.
     *
     * @param $locationProvider
     *      Angular dependency for providing location services
     * @param $routeProvider
     *      Angular dependency for providing routing services
     */
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/record/:id', {
            templateUrl: 'record-view/record-view.html',
            controller: 'RecordViewController',
            controllerAs: 'vm'
        });
    }
})();