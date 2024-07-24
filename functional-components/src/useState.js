import { useState } from 'react';

/*
Reglas de los Hooks: 
1. No se llaman desde loops, condicionales, ni whiles, ni nada.
2. Siempre deben estar en el nivel más alto del componente.
3. Solo se llaman en dos partes: 
    3.1 Componente de React 
    3.2 Custom Hooks
Note: cuando creemos un custom hook se debe hacer de la forma
use<nombre de nuestro custom hook>
*/

const useContador = (inicial) => {
    const [ contador, setContador ] = useState(inicial);
    const incrementar = ( ) => {
        setContador(contador + 1)
    };

    return [contador, incrementar]
}

const App = () => {
    const [contador, incrementar] = useContador(0)
    return(
        <div>
            Contador: { contador }
            <button onClick={incrementar}>
                Incrementar
            </button>
        </div>
    )
}


export default App;
