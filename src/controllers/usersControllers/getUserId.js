const { User } = require('../../DB_connection');

const getUserId = async (id) => {
    const found = await User.findByPk(id)
    if(!found) throw Error('Usuario no encontrado');
    return found;
}

module.exports = { getUserId }