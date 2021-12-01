import React , {useState,useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './component/Frase'




const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%,#007d35 40%,#0f574e 100%);
background-size:300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-top:3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
transition: background-size .8s ease;
:hover{
  cursor: pointer;
  background-size:400px
}
`;


function App() {
//state de frases
const [frase,setFrase] =useState({})



/* const consultarApi= () =>{
  const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = api.then(resultado =>resultado.json())
  frase.then(resultado=>console.log(resultado[0]))
} */

//metodo async awaint 
const consultarApi= async() =>{
  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = await api.json()
  setFrase(frase[0])
}
//cargar una frase
useEffect(() =>{
  consultarApi()
},[])

  return (  
   
    <div className="container">
      <Frase
      frase={frase}
      />
    <Boton
    onClick={() => consultarApi()}    >
      Obtener frase
    </Boton>
    </div>
    


  );
}

export default App;
