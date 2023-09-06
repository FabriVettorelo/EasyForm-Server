const { UserResponse } = require('../../DB_connection');

const deleteResponse = async (id) => {
    const deleteRes = await UserResponse.destroy({where:{id:+id}}) 
    if(!deleteRes) throw Error('La Respuesta no existe!')
    return deleteRes
  }

module.exports = { deleteResponse }