const { Reservation } = require('../db/sequelize');
const { User } = require('../db/sequelize');


exports.getAll = function getAll(whereclause, callback) {
    Reservation.findAll({where: whereclause, include: [User] })
        .then((reservation) => {
            return callback(null, reservation)
        })
        .catch((error) => {
            // logger.error(error);
            return callback(error);
        });
};

exports.getById =  function getById(id, callback) {
    Reservation.findById(id)
        .then((reservation) =>{
            return callback(null, reservation);
        })
        .catch((error) => {
            return callback(error);
        });
}

exports.insert =  function insert(data, callback) {
    let reservation = data;
    if (reservation.user_id == null) {
        return callback('unassigned customer number');
    }
    Reservation.create(data)
        .then((reservation) =>{
            return callback(null, reservation);
        })
        .catch((error) => {
            return callback(error);
        });
}


exports.del =  function del(reserveid, callback) {
    Reservation.destroy({
        where : {reserve_id : reserveid}
    })
        .then(result => {
            return callback(null, id);
        })
        .catch((error) => {
            return callback(error);
        });
}