/**
 * Controller for the record-view template.
 */
(function() {
    'use strict';

    /**
     * Associate the controller with the introApp.recordView module.
     */
    angular
        .module('introApp.recordView')
        .controller('RecordViewController', RecordViewController);

    /**
     * Prepare view model before showing on UI.
     *
     * @param recordviewservice
     *      Our own custom service for providing data for the record view
     * @param $routeParams
     *      Parameters from the route service
     * @constructor
     */
    function RecordViewController(recordviewservice, $routeParams) {
        var vm = this;

        // vm.records = recordlistservice.getRecordList().query();
        // console.log(vm.records);
        
        vm.record = recordviewservice.getRecord($routeParams.id).query();
        console.log(vm.record);
    }
})();