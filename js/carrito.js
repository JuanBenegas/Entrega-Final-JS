

function tablaAutos(auto) {
    return `
    <tr>
        <th>${auto.marca}</th>
        <th>${auto.modelo}</th>
        <th>$ ${auto.precio}</th>
    </tr>
    `
}

function recuperarLocalStorage() {
    let armarCompra = ""
    const tbody = document.querySelector("tbody")
    const listaCompra = JSON.parse(localStorage.getItem("listaCompra"))
    if (listaCompra.length > 0) {
        listaCompra.forEach(element => {
            armarCompra += tablaAutos(element)
        });
        tbody.innerHTML = armarCompra
    }
}

recuperarLocalStorage()
limpiarLocalStorage()

function limpiarLocalStorage() {
    let botonBorrar = document.querySelectorAll("button.btn-borrar")
    botonBorrar.forEach(btn => {
        btn.addEventListener("click", () => {
            localStorage.clear()
            location.reload()
        })
    })
}

finalizarCompra()

function finalizarCompra() {
    let botonComprar = document.querySelectorAll("button.btn-comprar")
    botonComprar.forEach(btn => {
        btn.addEventListener("click", async () => {
            const { value: email } = await Swal.fire({
                title: 'Nos pondremos en contacto',
                input: 'email',
                inputLabel: 'Ingrese su correo electronico',
                inputPlaceholder: 'Enter your email address'
              })
              
              if (email) {
                Swal.fire({
                    icon: 'success',
                    title: 'Muchas Gracias',
                    text: 'Nos pondremos en contacto con usted'
                })
              }
        })
    })
}
