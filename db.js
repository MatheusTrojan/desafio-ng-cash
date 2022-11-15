const Sequelize = require ("sequelize")
const sequelize = new Sequelize("ng-cash", "root", "matheus123", {
    dialect: "postgres",
    host: "localhost"
})

module.exports = sequelize;