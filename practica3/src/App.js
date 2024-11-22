
import './App.css';
import CrearYanidarComponentes from './components/1-CrearYanidarComponentes.jsx';
import EscribirMarcadoConJSX from './components/2-EscribirMarcadoConJSX';
import AñadirEstilos from './components/3-AñadirEstilos.jsx';
import MostrarDatos from './components/4-MostrarDatos.jsx';
import RenderizanoCondicional from './components/5-RenderizanoCondicional.jsx';
import RenderizandoLista from './components/6-RenderizandoLista.jsx';
import ResponderAEventos from './components/7-ResponderAEventos.jsx';
import ActualizarLaPantalla from './components/8-ActualizarLaPantalla.jsx';
import ElUsoDeHooks from './components/9-ElUsoDeHooks.jsx';
import CompartirDatosEntreComponentes from './components/10-CompartirDatosEntreComponentes.jsx';

/* para el paso 10 */
import React, {useState} from 'react';
/* cierre del paso 10 */

function App() {

  /* para el paso 10 */
  let [count , setCount] = useState(0)
  function tocar() {
      setCount(count + 1)
  }
  /* cierre del paso 10 */

  return (
    <div className="App">
      <header className="App-header">
        {/* 1 */}
        <CrearYanidarComponentes />
        {/* 2 */}
        <EscribirMarcadoConJSX />
        {/* 3 */}
        <MostrarDatos />
        {/* 4 */}
        <AñadirEstilos />
        {/* 5 */}
        <RenderizanoCondicional />
        {/* 6 */}
        <RenderizandoLista />
        {/* 7 */}
        <ResponderAEventos />
        {/* 8 */}
        <ActualizarLaPantalla />
        <ActualizarLaPantalla />
        {/* 9 */}
        <ElUsoDeHooks />
        {/* 10 */}
        <CompartirDatosEntreComponentes count={count} tocar={tocar} />
        <CompartirDatosEntreComponentes count={count} tocar={tocar} />

      </header>
    </div>
  );
}

export default App;
