const Producto = require('../models/producto.model');

//Mostrar todos los Productos
exports.getAllProductos = async (req, res) => {
    const productos = await Producto.find();
    console.log("getAllProductos succesfully");
    res.status(200).json(productos);
};

//Crear un nuevo Producto
exports.addProductos = async (req, res) => {
    const nuevoProducto = await Producto.create(req.body);
    console.log("addProductos succesfully "+ req.body);
    res.status(201).json(nuevoProducto);
};

//Mostrar un producto mediante su ID
exports.getProductoID = async (req, res) => {
    const { id } = req.params;
    const productoID = await Producto.findById(id);
    if (!productoID) return res.status(404).send({ message: 'No se encontro el producto' });
    console.log("getProductoID succesfully "+ id);
    res.status(200).json(productoID);
}

//Actualizar un usuario
exports.updateProducto= async (req, res) => {
    const { id } = req.params;
    const productoUpdate = await Producto.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!productoUpdate) return res.status(404).send({ message: 'No se encontro el producto' });
    console.log("updateProducto succesfully "+ id);
    res.status(200).json(productoUpdate);
}

//Borrar un usuario
exports.deleteProducto = async (req, res) => {
    const { id } = req.params;
    const productoDelete = await Producto.findByIdAndDelete(id);
    if (!productoDelete) return res.status(404).send({ message: 'No se encontro el producto' });
    console.log("deleteProducto succesfully "+ id);
    res.status(200).json({ message: 'Producto eliminado' });
}