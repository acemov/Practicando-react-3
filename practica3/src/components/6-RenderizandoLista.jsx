let verduras = [{ nombre: 'Zanahoria', id: 1,is:true }, { nombre: 'Papa', id: 2,is:false }, { nombre: 'Cebolla', id: 3,is:false }]

let listaVerduras = verduras.map(producto =>
    <li key={producto.id} style={{color:producto.is?"red":"blue", background:!producto.is?"black":"white"}}>
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