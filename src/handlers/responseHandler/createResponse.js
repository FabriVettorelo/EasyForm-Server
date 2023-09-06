const { postResponse } = require('../../controllers/responseControllers/postResponse')

const createResponse = async (req, res) => {
    const { FormId, UserId, formData } = req.body
    try {
        const response = await postResponse({ FormId, UserId, formData });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { createResponse };