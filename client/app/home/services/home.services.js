'use strict';

angular.module('homeModule').factory('_pomelo', ['$http', function($http) {
    var service = {};

    var _pomelo = window.pomelo;

    var getConnector = function (uid, callback) {
        var route = 'gate.gateHandler.queryEntry';
        _pomelo_pomelo.init({host: window.location.hostname, port: 3014, log: true}, function () {
            _pomelo.request(route, {uid: uid}, function (data) {
                _pomelo.disconnect();
                if (callback) callback(data);
            });
        });
    };

    service.login = function (uid, passwd, callback) {
        var route = 'connector.entryHandler.login';
        getConnector(uid, function (data) {
            _pomelo.init({host: data.host, port: data.port, log: true}, function(){
                _pomelo.request(route, {uid: uid, password: passwd}, function(message){
                    if (message.code !== 200){
                        //if message.code !== 200 that mean is user and passwd is wrong
                        _pomelo.disconnect();
                    }
                    if (callback) callback(message);
                });
            });
        });
    };

    service.register = function (user, callback) {
        var route = 'connector.entryHandler.register';
        getConnector(uid, function (data) {
            _pomelo.init({host: data.host, port: data.port, log: true}, function(){
                _pomelo.request(route, {user: user}, function(message){
                    _pomelo.disconnect();
                    if (callback) callback(message);
                });
            });
        });
    };

    service.send = function(message, callback){
        var route = 'message.messageHandler.sendMessage';
        _pomelo.request(route, { hb: 'hb' }, function (data) {
        });
    };

    return service;
});
