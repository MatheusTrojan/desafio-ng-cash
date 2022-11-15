const Sequelize = require("sequelize");
const database = require("../config/db");

const Users = database.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: Sequelize.STRING
})

module.exports = Users;