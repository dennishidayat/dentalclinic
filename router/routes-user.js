'use strict';

module.exports = function(app) {
    var controller = require('../controller/controller-user');

    app.route('/user').get(controller.user);
    // app.route('/account').post(controller.insertAcc);
    // app.route('/account/:id').get(controller.getAccById);
    // app.route('/account/:id').delete(controller.delAcc);
    // app.route('/account').put(controller.updateAcc);
};