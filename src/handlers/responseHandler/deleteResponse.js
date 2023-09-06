const { deleteResponse } = require('../../controllers/responseControllers/deleteResponse')

  const delResponse = async (req, res) => {
    try {
      const {id} = req.params
      const deleteAct = await deleteResponse(id)
      return res.status(200).json('Actividad borrada!')
    } catch (error) {
      return res.status(400).json({error: error.message})
    }
  }


module.exports = { delResponse };