module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Tasks', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name:  {
            allowNull: false,
            type: DataTypes.STRING(30)
        },
        description: DataTypes.STRING(50),
        dueDate: DataTypes.DATE,
        completed: {
            defaultValue: false,
            type: DataTypes.BOOLEAN
        },
        asignedUser: DataTypes.INTEGER,

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

    return Task
}
