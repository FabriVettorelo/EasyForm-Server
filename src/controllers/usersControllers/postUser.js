const { User1 } = require('../../DB_connection');

const postUser = async ({ email, name, password }) => {

    if (!email || !name || !password) {
        throw Error("Faltan datos");
    }
    const exists = await User1.findOne({ where: { email } }) 
    if (exists) throw Error("Cuenta ya registrada") 
    const newUser = await User1.create({ email, name, password })
    return newUser;
};

module.exports = { postUser }