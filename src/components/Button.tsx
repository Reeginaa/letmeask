//tipagem para passar propriedades
//o ponto de interrogação após o text faz com que a propriedade seja opcional
/*type ButtonProps = {
  children?: String;
}*/

import { useState } from "react";

export function Button() {
  //let counter = 0; //let deixa mudar
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    //console.log(counter);
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}
//imutabilidade - a partir do momento que uma variável foi criada dentro do
//estado de um componente ela não sofre alterações, sempre criamos uma nova 
//informação baseada na informação que tinhamos
