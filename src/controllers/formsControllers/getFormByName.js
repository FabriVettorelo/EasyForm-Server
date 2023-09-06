const { Form } = require('../../DB_connection');

const getFormByName = async (title) => {
    const form = await Form.findAll({
        where: { title }
    });
    if (!form.length) throw Error("No se encontró el Formulario");
    return form;
}

module.exports = { getFormByName };
