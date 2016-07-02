(function() {
    'use strict';

    angular
        .module('introApp.recordList')
        .controller('RecordListController', RecordListController);

    function RecordListController(recordlistservice) {
        alert("Record list controller");
        var vm = this;

        // vm.records =
        // [
        //     {
        //         "title": "Whenever You Need Somebody",
        //         "artist": "Rick Astley",
        //         "year": "1986",
        //         "albumCover": "assets/img/rickAstleyWheneverYouNeedSomeone.jpg",
        //         "albumPrice": 10.99
        //     }
        // ];

        vm.records = recordlistservice.getRecordList().query();
        console.log(vm.records);
    }
})();