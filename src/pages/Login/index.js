import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { validate } from "react-email-validator";

// eslint-disable-next-line
export default ({ setIsLogged }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Verifique os dados e tente novamente");
    } else {
      if(validate(email) === false){
        alert("Use um email válido")
      } else {
        const accounts = JSON.parse(localStorage.getItem("netflix-clone:accounts"))
        const account = accounts.filter(account => account.email === email && account.password === password)

        if(account.length === 0){
          alert("Não foi possível encontrar essa conta.\nVerifique os dados ou tente criar uma nova conta")
        } else {
          setIsLogged(true);
          history.push("/");
        }
      }
    }
  };

  return (
    <div className="login">
      <h1>Fazer login</h1>
      <div className="inputFields">
        <input
          type="email"
          className="customInput"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o seu email"
        />
        <input
          type="password"
          className="customInput"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a sua senha"
        />
      </div>
      <div className="linkWrapper" style={{ textAlign: "center", marginBottom: "30px" }}>
        <Link className="link" to="/register">Ainda não possui uma conta? Criar uma conta</Link>
      </div>
      <div className="buttonWrapper" style={{ textAlign: "center", marginTop: "10px" }}>
        <button className="actionButton" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
};
