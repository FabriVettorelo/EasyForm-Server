const { getFormId } = require('../../controllers/formsControllers/getFormId')

const getFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await getFormId(id);  
        return res.status(200).json(form);
      } catch (error) {       
      return res.status(404).json({error:error.message});
      }
}

module.exports = { getFormById };