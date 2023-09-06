const { UserResponse } = require('../../DB_connection');

const putResponse = async ({ id, updatedData }) => {
    const existingResponse = await UserResponse.findByPk(id);
    if (!existingResponse) throw Error("No se encontró la Respuesta");
    const response = await existingResponse.update(updatedData);
    return response;
}

module.exports = { putResponse }