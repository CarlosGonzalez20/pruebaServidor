const express = require('express');
const { getAllUsuarios, addUsuarios, getUsuarioID, updateUsuario, deleteUsuario } = require('../controllers/usuario.controller');
const router = express.Router();

//mostrar todos los usuarios en MongoDB
router.get('/usuarios', getAllUsuarios);
//creacion de un nuevo usuario
router.post('/nuevoUsuario', addUsuarios);
//buscar un usuario
router.get('/usuario/:id', getUsuarioID);
//actualizar un usuario
router.put('/actualizarUsuario/:id', updateUsuario);
//borrar un usuario
router.delete('/borrarUsuario/:id', deleteUsuario);

module.exports = router;