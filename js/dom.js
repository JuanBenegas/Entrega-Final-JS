const carrito = []
const titulo = document.getElementById("titulo")
const container = document.getElementById("card-container")
const footer = document.getElementById("footer")

titulo.innerText = "Fantasía automotriz"
footer.innerText = "Copyrigth-2022-No tengo ideas"

function mostrarCards(array) {
    let almacenador = ""
    if (array.length > 0){
        array.forEach(element => {
            almacenador += crearCards(element)
        });
        container.innerHTML = almacenador
    }
}

mostrarCards(coches)