const mongoose = require('mongoose');

const ProductoEsquema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidad: Number,
    caracteristicas: {
        type: mongoose.Schema.Types.Mixed, 
        default: { 
            "Procesador": "", 
            "Tarjeta grafica": "" 
        }
    }
});


module.exports = mongoose.model('Producto', ProductoEsquema);