const Sequelize = require('sequelize');
const UserModel = require('../model/user');
const ReservationModel = require('../model/reservation');

const sequelize = new Sequelize('dental_clinic', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});

const User = UserModel(sequelize, Sequelize)
const Reservation = ReservationModel(sequelize, Sequelize)
Reservation.belongsTo(User, {foreignKey: 'user_id', targetKey:'user_id'});
// Transaction.belongsTo(Account, {foreignKey: 'accountnumber', targetKey:'accountnumber'});

module.exports = {
    User,
    Reservation
}