/**
 * Top level module for the entire application. This module should define any dependencies that will be used
 * throughout the entire application.
 */
(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('introApp', [
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'introApp.recordList',
        'introApp.recordView'
    ]);
})();
