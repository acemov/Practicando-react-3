
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

function App() {
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

      </header>
    </div>
  );
}

export default App;
