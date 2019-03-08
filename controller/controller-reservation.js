'use strict';

var response = require('../model/res');
var reservationDaoSequelize = require('../dao/reservation-dao');


exports.reservation = function reservation(req, res) {
    let params = {};
    if (req.query.reservation){
        params.user_id = req.query.reservation;
    }
    reservationDaoSequelize.getAll(params, function (err, rows) {
        if (err) {
            // logger.error('error while select : ' + err);
            response.err(err, res);
        }
        response.ok(rows, res);
    });
};

exports.getResById =  function getResById(req, res) {
    reservationDaoSequelize.getById(req.params['reserveid'], function (err, data) {
        if (err) {
            response.err(err, res);
        }
        response.ok(data, res);
    });
}

exports.insertReservation =  function insertReservation(req, res) {
    reservationDaoSequelize.insert(req.body, function (err, data) {
        if (err) {
            response.err(err, res);
        }
        response.ok(data, res);
    });
}

exports.deleteReservation =  function deleteReservation(req, res) {
    reservationDaoSequelize.del(req.params['reserveid'], function (err, rows) {
        if (err) {
            response.err(err, res);
        }
        response.ok(rows, res);
    });
}
