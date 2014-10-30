angular.module('starter.gitevents', [])
.factory('gitEventFactory', ['$rootScope', function ($rootScope) {

    var host = ""; //location.origin.replace(/^http/, 'ws');
    //host ="ws://localhost:5000";
    host = "ws://162.243.138.188:5000/";

    var ws = new WebSocket(host);
    ws.onmessage = function (message) {
        var obj = JSON.parse(message.data);

        $rootScope.$broadcast('locationUpdate',obj);
        };
    }
]);