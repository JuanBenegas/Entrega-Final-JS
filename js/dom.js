const carrito = []
const titulo = document.getElementById("titulo")
const container = document.getElementById("card-container")
const footer = document.getElementById("footer")
const productos = []

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

function clickBotones() {
    const botonesTienda = document.querySelectorAll("button.btn-compra")
    botonesTienda.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            console.log(resultado)
            localStorage.setItem("miCarrito", JSON.stringify(carrito))
        })
    })
}