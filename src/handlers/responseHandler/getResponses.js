const { UserResponse } = require('../../DB_connection');

const getResponses = async (req, res) => {
    try {
        const responseList = await UserResponse.findAll();
        return res.status(200).json(responseList);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getResponses };