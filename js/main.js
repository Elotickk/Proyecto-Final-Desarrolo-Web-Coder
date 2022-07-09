// Desafio 4 simulador interactivo//
class Productos{
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = stock
    }
    imprimir(objeto){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }
    }
}


const listaProductos = [
    {nombre: "Mochila", precio: 2000,stock: 3}
]

const agregarProd = () => {
    let nombre = prompt("Nombre del producto");
    let precio = parseFloat(prompt("Precio del producto"));
    let stock = parseInt(prompt("Cuanto de stock tienes?"));
    let prod = new Productos(nombre,precio,stock);
    listaProductos.push(prod);
    console.log(listaProductos);
}

for( producto of listaProductos) {
    console.log(`Este producto es ${producto.nombre}, su precio es ${producto.precio} y tiene de stock ${producto.stock}`)
}
