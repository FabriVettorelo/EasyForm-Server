const { User1 } = require('../../DB_connection');

const getUserId = async (id) => {
    const found = await User1.findByPk(id)
    if(!found) throw Error('Usuario no encontrado');
    return found;
}

module.exports = { getUserId }