import React from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
// Importando o botão do Material-UI
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      {/* Botão personalizado dentro do retorno JSX */}
      <div>
        <Button className="botao-personalizado">Meu Botão</Button>
      </div>
    </div>
  );
}

export default App;