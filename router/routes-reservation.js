'use strict';

module.exports = function(app) {
    var controller = require('../controller/controller-reservation');

    app.route('/reservation').get(controller.reservation);
    app.route('/reservation/:reserveid').get(controller.getResById);
    app.route('/reservation').post(controller.insertReservation);
    app.route('/reservations/:reserveid').get(controller.deleteReservation);
    // app.route('/account').put(controller.updateAcc);
};