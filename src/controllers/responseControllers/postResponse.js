const { UserResponse } = require('../../DB_connection');

const postResponse = async ({ FormId, UserId, formData }) => {

    if (!FormId || !UserId || !formData) {
        throw Error("Faltan datos");
    }
    const exists = await UserResponse.findOne({ where: { FormId, UserId } })
    if (exists) throw Error("Este Formulario ya se completó")
    const response = await UserResponse.create({
        FormId,
        UserId,
        formData,
    });
    return response;
};

module.exports = { postResponse }