const {User1} = require('../../DB_connection');

const postLogin = async({email, password}) =>{
      const user = await User1.findOne({ where: { email } });
  
      if (!user) throw Error("Usuario no encontrado") 
      if (user.password !== password) throw Error("Contraseña invalida")

      return user;
}

module.exports = { postLogin }