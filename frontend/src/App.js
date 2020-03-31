import React from 'react';

//import Header from './Header'

import './global.css';
//import Logon from './pages/Logon/index';  // o /index pode ser omitido react automaticamente procura pelo index
//subistituindo a importação do logon pelo routes
import Routes from './routes';

//JSX (JavaScript XML)
// Um componente react é uma função que retorna HTML, que está escrito dentro do javascript (JSX)
function App() {
//   //criação de estado que será redenrizado na tela após ser alterado
//   const [count,setCounter] = useState(0) ; 
//   //useState retorna um array [valor da variavel, função de atualização do valor]
//   //Isso permite atualizar uma informação e isso ser refletido na interface
//   function increment(){
//     setCounter(count +1); //imutabilidade para performace é preciso sobrepor o valor da variavel do estado
//   }

  return (
    <Routes />
    //No React para tem um elemento um abaixo do outro precisa de um elemento em volta
    //Propriedade: 
    // <div>
    //   <Header> Contador: {count} </Header>
    //   <button onClick={increment}>increment</button>
    // </div>
  );
}

export default App;
