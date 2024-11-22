import React, {useState} from "react";
function MyComponent() {
    let numeroRandom = Math.floor(Math.random() * 2);
    const [count, setCount] = useState(numeroRandom); // ✅ Siempre al nivel superior

    return (
        <div>
            {count > 0 && <p>El contador es mayor que 0</p>} {/* Esto está bien */}
        </div>
    );
}

export default MyComponent