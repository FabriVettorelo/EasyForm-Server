const { Form } = require('../../DB_connection');

const getFormId = async (id) => {
    const found = await Form.findByPk(id)
    if(!found) throw Error("No se encontró el Formulario");
    return found;
}

module.exports = { getFormId };