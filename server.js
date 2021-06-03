const express = require('express');
const { producto } = require('./api/productos');
const productos = require('./api/productos');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/productos/listar', (req, res) => {
    let mensajeLista = {}
    if (productos.producto.length == 0) {
        mensajeLista = { error: 'No hay productos cargados' }
    } else if(productos.producto.length > 0){
        mensajeLista = productos.listar()
    }
    res.json(mensajeLista)
})
app.get('/api/productos/listar/:id', (req, res) => {
    let mensajeLista = {};
    if (!productos.producto[req.params.id]) {
        mensajeLista = { error: 'Producto no encontrado' };
    } else {
        mensajeLista = productos.producto[req.params.id];
    }
    res.json(mensajeLista)
})

app.post('/api/productos/guardar', (req, res) => {
    let nuevoProducto = {};
    nuevoProducto.title = req.body.title;
    nuevoProducto.price = req.body.price;
    nuevoProducto.thumbnail = req.body.thumbnail;
    nuevoProducto.id = productos.producto.length;
    productos.guardar(nuevoProducto)
    res.json(nuevoProducto)
})

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
