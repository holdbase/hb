'use strict';

angular.module('pomeloModule').factory('_pomelo', ['$http', function($http) {
    var service = {};

    var sPomelo = window.pomelo;

    var getConnector = function (uid, callback) {
        var route = 'gate.gateHandler.queryEntry';
        sPomelo.init({host: window.location.hostname, port: 3014, log: true}, function () {
            sPomelo.request(route, {uid: uid}, function (data) {
                sPomelo.disconnect();
                if (callback) callback(data);
            });
        });
    };

    service.login = function (uid, passwd, callback) {
        var route = 'connector.entryHandler.login';
        getConnector(uid, function (data) {
            sPomelo.init({host: data.host, port: data.port, log: true}, function(){
                sPomelo.request(route, {uid: uid, password: passwd}, function(message){
                    if (message.code !== 200){
                        //if message.code !== 200 that mean is user and passwd is wrong
                        sPomelo.disconnect();
                    }
                    if (callback) callback(message);
                });
            });
        });
    };

    service.register = function (user, callback) {
        var route = 'connector.entryHandler.register';
        getConnector(uid, function (data) {
            sPomelo.init({host: data.host, port: data.port, log: true}, function(){
                sPomelo.request(route, {user: user}, function(message){
                    sPomelo.disconnect();
                    if (callback) callback(message);
                });
            });
        });
    };

    service.send = function(message, callback){
        var route = 'message.messageHandler.sendMessage';
        sPomelo.request(route, { hb: 'hb' }, function (data) {
        });
    };

    return service;
}]);