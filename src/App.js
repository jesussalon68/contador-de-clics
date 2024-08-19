import './App.css';
import Boton from './componentes/Boton';
import freecodecamplogo from "./imagenes/freecodecamp-logo.png";



function App() {

  const manejarClic = () => {
    console.log("clic")
  }

  const reiniciarcontador = () => {
    console.log("reiniciar")
  }



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecamplogo} alt="logo de freecodecamp"/>
      </div>
      <div className='contenedor-principal'>
        <Boton texto="clic" esBotonDeClic={true} manejarClic={manejarClic}/>
        <Boton texto="reiniciar" esBotonDeClic={false} manejarClic={reiniciarcontador}/>
      </div>
    </div>
  );
}

export default App;
