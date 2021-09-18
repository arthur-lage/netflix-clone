import "./styles.css";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { validate } from "react-email-validator";

// eslint-disable-next-line
export default ({ setIsLogged }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { accounts, setAccounts } = useContext(UserContext)

  const handleRegister = () => {
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      alert("Verifique os dados e tente novamente");
    } else {
      if(validate(email) === false){
        alert("Use um email válido")
      } else {
        if(accounts.filter(account => account.email === email).length > 0){
          alert("Uma conta com essas credenciais já foi criada")
        } else {
          const newAccount = {
            name,
            email,
            password
          }

          setAccounts([...accounts, newAccount])

          setIsLogged(true)
          history.push("/")
        }
      }
    }
  };

  return (
    <div className="register">
      <h1>Criar conta</h1>
      <div className="inputFields">
        <input
          type="text"
          className="customInput"
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o seu nome"
        />
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
        <Link className="link" to="/login">Já possui uma conta? Fazer login</Link>
      </div>
      <div className="buttonWrapper" style={{ textAlign: "center", marginTop: "10px" }}>
        <button className="actionButton" onClick={handleRegister}>
          Registrar
        </button>
      </div>
    </div>
  );
};
