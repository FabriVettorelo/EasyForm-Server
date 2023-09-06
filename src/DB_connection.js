require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FormModel = require("./models/Form");
const UserModel = require("./models/User");
const UserResponseModel = require("./models/UserResponse")
const server = require('./app');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/forms`,
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




