const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('user',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false
    })
}