const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../db');

const User = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: Sequelize.DATE
    }
  }, {});
module.exports = User;