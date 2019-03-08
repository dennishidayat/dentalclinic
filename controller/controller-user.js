'use strict';

var response = require('../model/res');
var userDaoSequelize = require('../dao/user-dao');

exports.user = function user(req, res) {
    userDaoSequelize.getAll(function (err, rows) {
        if (err) {
            // logger.error('error while select : ' + err);
            response.err(err, res);
        }
        response.ok(rows, res);
    });
};
