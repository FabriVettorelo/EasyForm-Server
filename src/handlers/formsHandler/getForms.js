const { getFormByName } = require('../../controllers/formsControllers/getFormByName')
const { Form } = require('../../DB_connection')

const getForms = async (req, res) => {
    try {
        const { title } = req.query
        const results = title ? await getFormByName(title) : await Form.findAll();
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getForms };