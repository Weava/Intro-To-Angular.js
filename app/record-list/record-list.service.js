/**
 * Service for gathering record lists from data source.
 */
(function() {
    'use strict';

    /**
     * Associate service with the introApp.recordList module.
     */
   angular
       .module('introApp.recordList')
       .factory('recordlistservice', ['$resource', recordlistservice]);

    function recordlistservice($resource) {

        /**
         * Return all public methods here at the top for a much simpler definition of all methods available.
         * Define the methods below. This is considered good practice, and makes for more readable code.
         *
         * @type {{getRecordList: getRecordList}}
         */
        var service = {
            getRecordList: getRecordList
        };

        return service;

        /**
         * Retrieves record list from local JSON file.
         *
         * @returns {*}
         */
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