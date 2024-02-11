const { UserResponse } = require('../../DB_connection');

const postResponse = async ({ FormId, User1Id, formData }) => {

    if (!FormId || !User1Id || !formData) {
        throw Error("Faltan datos");
    }
    const exists = await UserResponse.findOne({ where: { FormId, User1Id } })
    if (exists) throw Error("Este Formulario ya se completó")
    const response = await UserResponse.create({
        FormId,
        User1Id,
        formData,
    });
    return response;
};

module.exports = { postResponse }