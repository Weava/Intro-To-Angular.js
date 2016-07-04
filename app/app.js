(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('introApp', [
        'ngRoute',
        'ngResource',
        'introApp.recordList',
        'introApp.recordView'
    ]);
})();
