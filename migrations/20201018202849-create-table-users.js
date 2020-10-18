const { DataTypes } = require('sequelize')

module.exports = {
    up: queryInterface => queryInterface.createTable('Users', {
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

      created_at: {
          allowNull: false,
          type: DataTypes.DATE
      },
      updated_at: {
          allowNull: true,
          type: DataTypes.DATE
      }
    }),
    down: queryInterface => queryInterface.dropTable('Users')
};
