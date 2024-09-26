// Importa mongoose, una biblioteca de MongoDB para modelar datos.
const mongoose = require('mongoose');

// Un esquema es una estructura que describe cómo se almacenarán los datos en MongoDB.
const ProductoEsquema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    cantidad: Number,
    description: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
        // Este campo es un objeto con varias propiedades que describen las características técnicas del producto.
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

// Esto permite que otras partes de la aplicación utilicen este modelo para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos.
module.exports = mongoose.model('Producto', ProductoEsquema);