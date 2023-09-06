const { getUserId } = require('../../controllers/usersControllers/getUserId')

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserId(id);  
        return res.status(200).json(user);
      } catch (error) {        
        return res.status(404).json({error:error.message});
      }
}

module.exports = { getUserById };