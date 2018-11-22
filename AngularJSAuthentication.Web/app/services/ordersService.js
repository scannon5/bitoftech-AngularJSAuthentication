﻿'use strict';
app.factory('ordersService', ['$http', function ($http) {

    var serviceBase = 'https://localhost:44302/';
    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(serviceBase + 'api/orders').then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);