function BotonConProps({count, tocar}) {
    return(
        <button onClick={tocar}>
            Numeros de clicks: {count}
        </button>
    )
}
export default BotonConProps