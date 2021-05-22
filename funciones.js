//Mensaje de Bienvenida.
function Mostrar () {
    var miDiv =document.getElementById("bienvenido");
    if(miDiv.style.display == "none"){
        // Muestro la etiqueta div
        miDiv.style.display = "block";
        }else {
            //oculto la etiqueta div
            miDiv.style.display = "none"
        }
}