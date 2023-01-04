const compra = []
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

const botonesTienda = document.querySelectorAll("input.btn")

function clickBotones() {
    botonesTienda.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = coches.find(prod => prod.id === parseInt(btn.id))
            compra.push(resultado)
            localStorage.setItem("listaCompra", JSON.stringify(compra))
            toast("Se agrego el producto")
        })
    })
}

clickBotones()



function toast(text) {
    Toastify({
        text: text,
        duration: 3000,
        // newWindow: true,
        // close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}