const mongoose = require('mongoose');

const ProductoEsquema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidad: Number,
    caracteristicas: {
        type: mongoose.Schema.Types.Mixed, 
        default: { 
            "Procesador": String, 
            "Tarjeta grafica": String,
            "Conexion": String,
            "Pantalla": String,
            "Almacenamiento": Number,
            "Memoria RAM": Number,
            "Sistema operativo": String,
            "Peso": Number,
            "Dimensiones": String,
            "Color": String,
            "Camaras": String,
            "Bateria": Number
        }
    }
});


module.exports = mongoose.model('Producto', ProductoEsquema);