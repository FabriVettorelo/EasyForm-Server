const { postResponse } = require('../../controllers/responseControllers/postResponse')

const createResponse = async (req, res) => {
    const { FormId, User1Id, formData } = req.body
    try {
        const response = await postResponse({ FormId, User1Id, formData });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { createResponse };