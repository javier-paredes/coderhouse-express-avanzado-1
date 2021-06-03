class Productos {
    constructor() {        
        this.producto = [];
    }

    listar(){
        return this.producto;
    }

    guardar(productos){
        this.producto.push(productos)
    }
    // agregar los metodos requeridos
}

// exporto una instancia de la clase
module.exports = new Productos();