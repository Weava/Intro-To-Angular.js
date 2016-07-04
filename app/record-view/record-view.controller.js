(function() {
    'use strict';

    angular
        .module('introApp.recordView')
        .controller('RecordViewController', RecordViewController);

    function RecordViewController(recordviewservice, $routeParams) {
        var vm = this;

        // vm.records = recordlistservice.getRecordList().query();
        // console.log(vm.records);
        
        vm.record = recordviewservice.getRecord($routeParams.id).query();
        console.log(vm.record);
    }
})();