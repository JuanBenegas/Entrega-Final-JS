function crearCards(autos) {
    return `
    <div class="card">
        <div class="img">${autos.imagen}</div>
        <div class="modelo">${autos.modelo}</div>
        <div class="marca">${autos.marca}</div>
        <div class="precio">$ ${autos.precio.toFixed(2)}</div>
        <div class="btn"><input type="button" value="➕" id="${autos.id}"></div>
    </div>
    `
}

function carritoNumero() {
    
}