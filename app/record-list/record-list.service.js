(function() {
    'use strict';

   angular
       .module('introApp.recordList')
       .factory('recordlistservice', ['$resource', recordlistservice]);

    function recordlistservice($resource) {
        // return $resource('records/records.json', {}, {
        //
        // })

        var service = {
            getRecordList: getRecordList
        };

        return service;

        function getRecordList() {
            console.log('Getting record list');
            return $resource('records/records.json', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    }
})();