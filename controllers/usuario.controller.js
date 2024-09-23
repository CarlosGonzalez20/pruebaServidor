const Usuario = require('../models/usuario.model');

//Mostrar todos los usuarios
exports.getAllUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    console.log("getAllUsuarios succesfully");
    res.status(200).json(usuarios);
};

//Crear un nuevo usuario
exports.addUsuarios = async (req, res) => {
    const nuevoUsuario = await Usuario.create(req.body);
    console.log("addUsuarios succesfully "+ req.body);
    res.status(201).json(nuevoUsuario);
};

//Mostrar un usuario
exports.getUsuarioID = async (req, res) => {
    const { id } = req.params;
    const usuarioID = await Usuario.findById(id);
    if (!usuarioID) return res.status(404).send({ message: 'No se encontro el usuario' });
    console.log("getUsuarioID succesfully "+ id);
    res.status(200).json(usuarioID);
}

//Actualizar un usuario
exports.updateUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioUpdate = await Usuario.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!usuarioUpdate) return res.status(404).send({ message: 'No se encontro el usuario' });
    console.log("updateUsuario succesfully "+ id);
    res.status(200).json(usuarioUpdate);
}

//Borrar un usuario
exports.deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioDelete = await Usuario.findByIdAndDelete(id);
    if (!usuarioDelete) return res.status(404).send({ message: 'No se encontro el usuario' });
    console.log("deleteUsuario succesfully "+ id);
    res.status(200).json({ message: 'Usuario eliminado' });
}