const mongoose = require('mongoose');

const UsuarioEsquema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String
});

module.exports = mongoose.model('Usuario', UsuarioEsquema);