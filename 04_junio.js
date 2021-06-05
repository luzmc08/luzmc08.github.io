var Auto = {
    placa: "AF3456",
    color:"Azul",
    velocidadMax:150,
    velocidadInicial:0,
    HP:600,
    tanque:25,
    unidadTanque: "galones",
    numeroCambio: [1,2,3,4,"R"]
    acelerar: function(cambio){
        return cambio * 30;
    },
    frenar: function(){
        
    }
}

// Frutas => manzana,cerveza,uva, ......
function crearFruta (nombre,precio){
    var obj ={};
    obj.nombre = nombre;
    obj.precio = precio
    obj.cantidad = cantidad
    obj.calcularPrecioTotal = function(){
        return obj.precio * obj.cantidad;
    };
    return obj;
}



//funcion que carga las frutas nuevas.
function cargaFruta(nombre,precio,cantidad){
    var miFruta = crearFruta(nombre,precio,cantidad);
    var listaFrutas = document.getElementById('listaFrutas');

    listaFrutas.innerHTML = listaFrutas.innerHTML +
    'Nombre' +miFruta.nombre +
    '- Precio:' +miFruta.precio +
    '- Cantidad:' +miFruta.cantidad +
    '- Total:'+miFruta.calcularPrecioTotal() +
    '<br>';
}