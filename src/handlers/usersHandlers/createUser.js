const { postUser } = require('../../controllers/usersControllers/postUser')

const createUser = async (req, res) => {
    const {email,name,password} = req.body;
    try {
        const response = await postUser({email,name,password});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { createUser };