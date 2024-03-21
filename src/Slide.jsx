import React, { useState,useEffect} from 'react';

function Slideshow() {
  const imagens = ['slide1.png', 'slide2.png'];
  const [indiceAtual, setIndiceAtual] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(proximoSlide, 5000); 

    return () => clearInterval(interval);
  }, []); 

  const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  const voltarSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  return (
    <div>
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} />

      <button onClick={voltarSlide}>Anterior</button>
      <button onClick={proximoSlide}>Próximo</button>
    </div>
  );
}

export default Slideshow;