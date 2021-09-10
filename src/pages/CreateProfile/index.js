import React, { useContext, useState } from "react";
import "./styles.css";

import Api from "../../Api";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

// eslint-disable-next-line
export default () => {
  const history = useHistory();

  const [currentName, setCurrentName] = useState("");
  const [currentAvatar, setCurrentAvatar] = useState("");

  const { users, setUsers } = useContext(UserContext);

  const handleCancel = () => {
    history.push("/profile");
  };

  const handleSave = async () => {
    let id = users.length + 1;
    let name = currentName.length === 0 ? `User ${id}` : currentName;
    let avatar =
      currentAvatar.length === 0 ? await Api.getRandomImage() : currentAvatar;

    let newUser = {
      id,
      avatar,
      name,
    };

    setUsers([...users, newUser]);

    history.push("/profile");
  };

  return (
    <div className="createProfile">
      <div className="container">
        <h2>Criação de perfil</h2>
        <div className="profileFields">
          <input
            placeholder="Nome do perfil"
            onChange={(e) => setCurrentName(e.target.value)}
            type="text"
            name="profileName"
            id="profileName"
          />
          <input
            placeholder="Imagem de perfil (Opcional)"
            onChange={(e) => setCurrentAvatar(e.target.value)}
            type="url"
            name="imageURL"
            id="imageURL"
          />
        </div>
        <div className="profileActions">
          <button className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="save" onClick={handleSave}>
            Salvar perfil
          </button>
        </div>
      </div>
    </div>
  );
};
