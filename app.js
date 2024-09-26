
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ProductoRoutes = require('./routes/producto.routes');
const port = 3001;

app.use(express.json());
app.use('/api', ProductoRoutes);

const homeRoute = require('./homeRoute');
app.get('/', homeRoute);

app.listen(port, () => {
    // Inicia el servidor y escucha en el puerto definido.
    console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/LosPanas').then(() => {
    // Conecta a la base de datos MongoDB 'LosPanas' en localhost.
    console.log('Database connected');
}).catch((err) => {
    console.log(err); 
});

