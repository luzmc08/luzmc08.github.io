//Mensaje de Bienvenida.
alert("Bienvenido a Certus")

function Mostrar () {
    var miDiv =document.getElementById("bienvenido");
    if(miDiv.style.display == "none"){
        miDiv.style.display = "block";
        }else {
            //oculto la etiqueta div
            miDiv.style.display = "none"
        }
}