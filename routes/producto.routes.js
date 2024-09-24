const express = require('express');
const { getAllProductos, addProductos, getProductoID, updateProducto, deleteProducto } = require('../controllers/producto.controller');
const router = express.Router();

//mostrar todos los usuarios en MongoDB
router.get('/productos', getAllProductos);
//creacion de un nuevo usuario
router.post('/nuevoProducto', addProductos);
//buscar un usuario
router.get('/producto/:id', getProductoID);
//actualizar un usuario
router.put('/actualizarProducto/:id', updateProducto);
//borrar un usuario
router.delete('/borrarProducto/:id', deleteProducto);

module.exports = router;