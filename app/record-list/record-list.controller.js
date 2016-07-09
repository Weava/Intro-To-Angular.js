/**
 * Controller for the Record List view. Should set up view model items before being shown.
 */
(function() {
    'use strict';

    /**
     * Associate controller with introApp.recordList module.
     */
    angular
        .module('introApp.recordList')
        .controller('RecordListController', RecordListController);

    /**
     * Prepare view model items before showing in the UI.
     *
     * @param recordlistservice
     *      Our custom service for gathering record list information.
     * @constructor
     */
    function RecordListController(recordlistservice) {
        var vm = this;

        vm.records = recordlistservice.getRecordList().query();
        console.log(vm.records);
    }
})();