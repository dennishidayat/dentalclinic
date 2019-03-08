module.exports = (sequelize, type) => {
    return sequelize.define('reservation', {
        reserve_id: {
            field: 'reserve_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reserve_date: {
            field: 'reserve_date',
            type: type.DATE,
        },
        reserve_desc: {
            field: 'reserve_desc',
            type: type.STRING,
        },
        user_id: {
            field: 'user_id',
            type: type.INTEGER,
            onDelete: 'CASCADE',
            
            references: {
                model:'user',
                targetKey: 'user_id'
            }
        }
    }, {
        tableName: 'reservation',
        timestamps: false
    });
}