const { DataTypes } = require('sequelize')

module.exports = {
    up: queryInterface => queryInterface.createTable('Tasks', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoincrement: true
      },
      name:  {
          allowNull: false,
          type: DataTypes.STRING(30)
      },
      description: DataTypes.STRING(50),
      due_date: DataTypes.DATE,
      completed: {
          defaultValue: false,
          type: DataTypes.BOOLEAN
      },
      asigned_user: DataTypes.INTEGER,

      created_at: {
          allowNull: false,
          type: DataTypes.DATE
      },
      updated_at: {
          allowNull: true,
          type: DataTypes.DATE
      }
    }),
    down: queryInterface => queryInterface.dropTable('Tasks')
};
