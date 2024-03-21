import { useState } from 'react'
import "./styles.css";
import Slideshow  from './Slide'

function Topo() {
  
    const [secaoAtual, setSecaoAtual] = useState('home');
  
    const cliqueSecao = (secao) => {
      setSecaoAtual(secao);
    };
  
    return (
      <header>
         <img src="logo.webp" alt="Logo" className="logo" />
  
      
        <nav>
          <ul>
            <li onClick={() => cliqueSecao('home')} className='botao-menu'>Home</li>
            <li onClick={() => cliqueSecao('equipe')} className='botao-menu'>Equipe</li>
            <li onClick={() => cliqueSecao('servicos')} className='botao-menu'>Serviços</li>
            <li onClick={() => cliqueSecao('contato')} className='botao-menu'> Contato</li>
          </ul>
        </nav>
        
        <Slideshow />
       
        <div>
          {secaoAtual === 'home' && (
            <div className='secao'>
              <h1>Seja Bem-vindo!!</h1>
              {}
            </div>
          )}
          {secaoAtual === 'equipe' && (
            <div className='secao'>
              <h1>Equipe</h1>
              {}
            </div>
          )}
  
          {secaoAtual === 'servicos' && (
            <div className='secao'>
              <h1>Serviços</h1>
              {}
            </div>
          )}
  
          {secaoAtual === 'contato' && (
            <div className='secao'>
              <h1>Contato</h1>
              {}
            </div>
          )}
        </div>
  
   
      </header>
    );
  }
  
  export default Topo;
  
