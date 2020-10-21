module.exports = {
    up: (queryInterface , Sequelize) => queryInterface.createTable('Tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:  {
          allowNull: false,
          type: Sequelize.STRING
      },
      description: Sequelize.STRING,
      due_date: Sequelize.DATE,
      completed: {
          defaultValue: false,
          type: Sequelize.BOOLEAN
      },
      asigned_user: Sequelize.INTEGER,

      created_at: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updated_at: {
          allowNull: true,
          type: Sequelize.DATE
      }
    }),
    down: queryInterface => queryInterface.dropTable('Tasks')
};
