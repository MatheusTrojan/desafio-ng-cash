const Sequelize = require("sequelize");
const database = require("../config/db");

const Accounts = database.define("accounts", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    balance: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
})

module.exports = Accounts;