const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usaruiRoutes = require('./routes/usuario.routes');
const port = 3001;

app.use(express.json());
app.use('/api', usaruiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/prueba1').then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

