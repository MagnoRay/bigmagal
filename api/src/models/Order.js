const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        payment_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_status_detail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pickup_date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        order_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false
    })
}