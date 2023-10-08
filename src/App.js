import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/Boton-clear';
import Pantalla from './componentes/Pantalla';
import logo from './img/space.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [limite] = useState(400);

  const agregarInput = val => {
    if (input.length + 1 > limite) {
      setInput(input.slice(1));
    } else {
      setInput(input + val);
    }
  };
  const calcularResultado = () => {
    if (input.length > 0 & input[input.length - 1] === '*' || input[input.length - 1] === '-' || input[input.length - 1] === '+' || input[input.length - 1] === '/') {
      alert('No se puede realizar la operación');
      return;
    }
  
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('No se puede realizar la operación');
      setInput('');
    }
  };
  
  
  console.log(input)
  return (
    <div className="App">
      <div className = 'logo-contenedor'>
        <img
           className = 'logo'
           src = {logo}
           alt = 'Logo de GitLab'
          />
      </div>
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}> 7 </Boton>
          <Boton manejarClick={agregarInput}> 8 </Boton>
          <Boton manejarClick={agregarInput}> 9 </Boton>
          <Boton manejarClick={agregarInput}> * </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}> 4 </Boton>
          <Boton manejarClick={agregarInput}> 5 </Boton>
          <Boton manejarClick={agregarInput}> 6 </Boton>
          <Boton manejarClick={agregarInput}> - </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}> 1 </Boton>
          <Boton manejarClick={agregarInput}> 2 </Boton>
          <Boton manejarClick={agregarInput}> 3 </Boton>
          <Boton manejarClick={agregarInput}> + </Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}> / </Boton>
          <Boton manejarClick={agregarInput}> 0 </Boton>
          <Boton manejarClick={agregarInput}> . </Boton>
          <Boton manejarClick={calcularResultado}> = </Boton>
        </div>
        <BotonClear manejarClear={() => setInput('')}> C </BotonClear>
      </div>
    </div>
  );
};

export default App;