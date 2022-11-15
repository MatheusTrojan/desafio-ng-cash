const Sequelize = require ("sequelize")
const sequelize = new Sequelize("ng-cash", "postgres", "123456", {
    dialect: "postgres",
    host: "localhost"
})

module.exports = sequelize;