import { useState } from "react";

function Botton() {
    const [count, setCount] = useState(0)

    function tocar() {
        setCount(count + 1)
    }

    return(
        <button onClick={tocar}>
            Soy el numero {count}
        </button>
    )
}

export default Botton