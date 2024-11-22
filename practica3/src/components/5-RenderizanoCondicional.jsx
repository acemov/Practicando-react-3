let imagenThorfin = {
    nombre: "Thorfin",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Thorfinn_Karlsefni_1918.jpg/220px-Thorfinn_Karlsefni_1918.jpg",
    width: "70px",
    height: "100px"
}

let imagenGoku = {
    nombre: "Goku",
    imagen: "https://www.elespectador.com/resizer/v2/ORPMXKF6Z5DOZCCWF22IP5NVWI.png?auth=ab9dc8b235e768091e588c7c39993d375eb3ed9765ca664fe9075d8230ca0704&width=920&height=613&smart=true&quality=60",
    width: "140px",
    height: "90px"
}

let imagenAElegir;

function NumerRandom() {
    return Math.floor(Math.random() * 2)
}

if (NumerRandom() === 1) {
    imagenAElegir = imagenThorfin

} else {
    imagenAElegir = imagenGoku
}

function MostrarImagen() {
    return (
        <img className={imagenAElegir.nombre} src={imagenAElegir.imagen} alt={imagenAElegir.nombre} style={{ width: imagenAElegir.width, height: imagenAElegir.height }} />
    )
}

export default MostrarImagen