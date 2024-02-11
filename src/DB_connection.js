require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_DEPLOY } = process.env;
const FormModel = require("./models/Form");
const UserModel = require("./models/User1");
const UserResponseModel = require("./models/UserResponse")
const server = require('./app');

const sequelize = new Sequelize( 
   DB_DEPLOY, 
   {
      logging: false,
      native: false,
      dialectOptions: {
         acquireTimeout: 9000,
         ssl: {
           require: true,
           rejectUnauthorized: false // Solo si tienes problemas con certificados autofirmados
         }
       } 
   }
);
FormModel(sequelize);
UserModel(sequelize);
UserResponseModel(sequelize)
const { User1, Form, UserResponse } = sequelize.models;

User1.hasMany(UserResponse);
UserResponse.belongsTo(User1);

Form.hasMany(UserResponse);
UserResponse.belongsTo(Form);

module.exports = {
   User1,
   Form,
   UserResponse,
   conn: sequelize,
};




