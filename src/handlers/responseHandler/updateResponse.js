const { putResponse } = require('../../controllers/responseControllers/putResponse')

const updateResponse = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const editResponse = await putResponse({ id, updatedData })
        return res.status(200).json(editResponse)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = { updateResponse };