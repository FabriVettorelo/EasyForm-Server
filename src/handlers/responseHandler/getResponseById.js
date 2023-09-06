const { getResponse } = require('../../controllers/responseControllers/getResponse')

const getResponseById = async (req,res) =>{
    try {
      const { id } = req.params;
      const response = await getResponse(id); 
      return res.status(200).json(response);
    } catch (error) {    
      return res.status(404).json({error:error.message});
    }
  }

module.exports = { getResponseById };