const db = firebase.firestore()

function cargarInicio(){
    const miFormulario = document.querySelector('#MiFormulario');
    

    miFormulario.addEventListener("submit", async(e) => {
        e.preventDefault();
        console.log("iniciando listener")
        const Cnombre = miFormulario['Nombre'].value;
        const Capellidos = miFormulario['Apellidos'].value;
        const Cedad = miFormulario['Edad'].value;

        console.log("iniciando listener")
        const respuesta = await db.collection('personas').doc().set({
            nombre:Cnombre, apellidos:Capellidos, edad:Cedad
        })
        console.log(Cnombre + " - " + Capellidos + " - " + Cedad);
    })

    const miBoton = document.querySelector('#BtnRecuperar');
    const getPersonas = () => db.collection ('personas').get();

    miBoton.addEventListener("click",async(e)=>{
        const consultaPersona = await getPersonas();
        consultaPersona.forEach(doc => {
            let data = doc.data();
            var miReporte = document.getElementById('MiReporte');
            miReporte.innerHTML += data.nombre + '<br>'
        })
    })
}