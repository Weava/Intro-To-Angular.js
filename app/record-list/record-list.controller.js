(function() {
    'use strict';

    angular
        .module('introApp.recordList')
        .controller('RecordListController', RecordListController);

    function RecordListController(recordlistservice) {
        var vm = this;

        vm.records = recordlistservice.getRecordList().query();
        console.log(vm.records);
    }
})();