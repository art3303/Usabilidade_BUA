import React from "react";
import InputText from "./InputText";

function App(){
  return(
    <div className="container">
      <form>
        <h2>Tela de Login</h2>
        <InputText type="text" label="Usuário"  id="username" name="username"/>


      </form>
    </div>

  );
}

export default App;