let numeroRandom = Math.floor(Math.random() * 100000);

function MostrarNumero (){
    return(
        <div style={{display:"flex" , justifyContent:"center" , flexDirection:"row"}}>
            <p style={{padding:"20px"}}> - 4 </p>
        <p style={{color:"white", border: "1px solid black", borderRadius:"20px", padding:"20px"  }}>{numeroRandom}</p>
        </div>
    )
}
export default MostrarNumero