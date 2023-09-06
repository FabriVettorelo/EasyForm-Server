const { postForm } = require('../../controllers/formsControllers/postForm')

const createForm = async (req, res) => {
    const { title, structure } = req.body
    try {
        const response = await postForm({ title, structure });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { createForm };