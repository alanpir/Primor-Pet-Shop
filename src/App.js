import fachada from "./Imagens/Fachada.jpeg";
import banhoTosa from "./Imagens/Banho e Tosa.jpeg";
import recepcao from "./Imagens/Recepção.jpeg";
import loja from "./Imagens/Loja.jpeg";
import contato from "./Imagens/Contato.jpeg";
import dicas from "./Imagens/Dicas.jpeg";
import "./produtos.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo"
        >SEJA BEM-VINDO AO PRIMOR PET SHOP</h1>
        <img alt="Loja" className="loja" src={loja}/>
      </header>

      <body>
        
        <h2 className="desc-banho-e-tosa">Banho e Tosa</h2>
        <img alt="Banho e Tosa" className="banho-e-tosa" src={banhoTosa}/>
        
        <h2>Recepção</h2>
        <img alt="Recepção" className="recepcao" src={recepcao}/>

        <h2 className="desc-fachada">Fachada</h2>
        <img alt="Fachada" className="fachada" src={fachada}/>
        
        <h2>Dicas</h2>
        <img alt="Dicas" className="dicas" src={dicas}/>

        <img alt="Contato" className="contato" src={contato}/>
      </body>

    </div>

  );
}

export default App;
