module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        user_id: {
            field: 'user_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            field: 'user_name',
            type: type.STRING,
        },
        user_pwd: {
            field: 'user_pwd',
            type: type.STRING,
        },
        user_birthdate: {
            field: 'user_birthdate',
            type: type.DATE,
        },
        user_phone: {
            field: 'user_phone',
            type: type.INTEGER,
        },
        user_address: {
            field: 'user_address',
            type: type.STRING,
        },
        user_status: {
            field: 'user_status',
            type: type.STRING,
        }
           
    }, {
        tableName: 'user',
        timestamps: false
    });
}