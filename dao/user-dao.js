const { User } = require('../db/sequelize');

exports.getAll = function getAll(callback) {
    User.findAll()
        .then((user) => {
            return callback(null, user)
        })
        .catch((error) => {
            // logger.error(error);
            return callback(error);
        });
};

