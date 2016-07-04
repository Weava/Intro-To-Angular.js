(function() {
    'use strict';

    angular
        .module('introApp.recordView')
        .factory('recordviewservice', ['$resource', recordviewservice]);

    function recordviewservice($resource) {
        // return $resource('records/records.json', {}, {
        //
        // })

        var service = {
            getRecord: getRecord
        };

        return service;

        function getRecord(id) {
            console.log('Getting record item');
            return $resource('records/' + id + '.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    }
})();