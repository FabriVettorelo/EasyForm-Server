const { UserResponse } = require('../../DB_connection');

const getResponse = async (id) => {
    const found = await UserResponse.findByPk(id)
    if (!found) throw Error('No se encontró la Respuesta');
    return found;
}

module.exports = { getResponse }