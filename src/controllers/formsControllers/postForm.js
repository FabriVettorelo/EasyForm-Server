const { Form } = require('../../DB_connection');

const postForm = async ({ title, structure }) => {

    if (!title || !structure) {
        throw Error("Faltan datos: Title o Structure");
    }
    const exists = await Form.findOne({ where: { title } })
    if (exists) throw Error("Ya existe un formulario con este nombre!")
    const response = await Form.create({
        title,
        structure
    });
    return response;
};


module.exports = { postForm };