module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoincrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        username: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(30)
        },

        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: true,
    })

    return User
}
