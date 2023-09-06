require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_DEPLOY } = process.env;
const FormModel = require("./models/Form");
const UserModel = require("./models/User");
const UserResponseModel = require("./models/UserResponse")
const server = require('./app');

const sequelize = new Sequelize(
    DB_DEPLOY,
   { logging: false, native: false }
);
FormModel(sequelize);
UserModel(sequelize);
UserResponseModel(sequelize)
const { User, Form, UserResponse } = sequelize.models;

User.hasMany(UserResponse);
UserResponse.belongsTo(User);

Form.hasMany(UserResponse);
UserResponse.belongsTo(Form);

module.exports = {
   User,
   Form,
   UserResponse,
   conn: sequelize,
};




