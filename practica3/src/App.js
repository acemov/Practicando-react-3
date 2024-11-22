
import './App.css';
import CrearYanidarComponentes from './components/1-CrearYanidarComponentes.jsx';
import EscribirMarcadoConJSX from './components/2-EscribirMarcadoConJSX';
import AñadirEstilos from './components/3-AñadirEstilos.jsx';
import MostrarDatos from './components/4-MostrarDatos.jsx';
import RenderizanoCondicional from './components/5-RenderizanoCondicional.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CrearYanidarComponentes />
        <EscribirMarcadoConJSX />
        <MostrarDatos />
        <AñadirEstilos />
        <RenderizanoCondicional />
      </header>
    </div>
  );
}

export default App;
