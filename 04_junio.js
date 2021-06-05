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
    obj.calcularPrecioTotal = function(precio){
        return obj.precio * obj.cantidad;
    };
    console.log(obj);
    return obj;
}