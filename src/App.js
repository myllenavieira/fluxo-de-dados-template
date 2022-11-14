import { useState } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { Container, GlobalStyle } from "./GlobalStyle";

function App() {
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            imagem={imagem}
            setImagem={setImagem}
            descricao={descricao}
            setDescricao={setDescricao}
            titulo={titulo}
            setTitulo={setTitulo}
          />
        </aside>
        <TelaDaPostagem imagem={imagem} descricao={descricao} titulo={titulo} />
      </Container>
    </>
  );
}

export default App;
