/**
 * Custom service to handle getting specific record information from a JSON file.
 */
(function() {
    'use strict';

    /**
     * Associate this service with the introApp.recordView module.
     */
    angular
        .module('introApp.recordView')
        .factory('recordviewservice', ['$resource', recordviewservice]);

    /**
     * Retrieve specific record info from local file using ID.
     *
     * @param $resource
     *      Angular dependency for gathering resources
     * @returns {{getRecord: getRecord}}
     */
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