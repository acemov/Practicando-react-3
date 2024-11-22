
import './App.css';
import {MostrarImagen} from './components/5-RenderizanoCondicional.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <SoyUnComponente />
        <MostrarImagen />
      </header>
    </div>
  );
}

let nombre = "Franco"

function MyButton() {
  return (
    <button>Soy un boton</button>
  )
}
function SoyUnComponente() {
  return (
    <h1 className='saludo'>H0la {nombre}</h1>
  )
}

export default App;
