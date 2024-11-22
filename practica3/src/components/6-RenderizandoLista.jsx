let verduras = [{ nombre: 'Zanahoria', id: 1, }, { nombre: 'Papa', id: 2, }, { nombre: 'Cebolla', id: 3, }]

let listaVerduras = verduras.map(producto =>
    <li key={producto.id}>
        {producto.nombre}
    </li>
)

function ElementosProductos() {
    return (
        <ul>
            {listaVerduras}
        </ul>
    )
}
export default ElementosProductos