const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('item', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        final_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },{
        timestamps: false
    })
}