import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// eslint-disable-next-line
export default () => {
  const { users, setUsers } = useContext(UserContext);
  const [currentlyEditing, setCurrentlyEditing] = useState(null);
  const [nameText, setNameText] = useState("");
  const [imageText, setImageText] = useState("");

  const history = useHistory()

  const handleProfileClick = (userId) => {
    const userToEdit = users.filter((user) => user.id === userId)[0];
    setCurrentlyEditing(userToEdit);
  };

  useEffect(() => {
    if (currentlyEditing !== null) {
      setNameText(currentlyEditing.name);
      setImageText(currentlyEditing.avatar);
    } else {
      return;
    }
  }, [currentlyEditing]);

  const handleBack = () => {
    history.push("/profile")
  };

  const handleDelete = () => {
    if(currentlyEditing !== null)
      setUsers(users.filter(user => user.id !== currentlyEditing.id))

    setCurrentlyEditing(null)
  };

  const handleSave = () => {
    if(currentlyEditing !== null){
      const id = currentlyEditing.id
      const name = nameText.length === 0 ? currentlyEditing.name : nameText
      const avatar = imageText.length === 0 ? currentlyEditing.avatar : imageText

      const indexToEdit = users.findIndex(user => user.id === id)

      users[indexToEdit].name = name
      users[indexToEdit].avatar = avatar

      setUsers(users)

      localStorage.setItem("netflix-clone:users", JSON.stringify(users))

      history.push("/profile")
    }
  };
  
  return (
    <div className="editProfile">
      <div className="back">
        <button className="return-button" onClick={handleBack}>
          <ArrowBackIcon className="return-button-icon" style={{ fontSize: 35 }} />
        </button>
      </div>
      
      <div className="profiles">
        {users.map((user, key) => (
          <div
            onClick={() => handleProfileClick(user.id)}
            key={key}
            className="profile"
          >
            <img
              className={
                currentlyEditing !== null && currentlyEditing.id === user.id
                  ? "active"
                  : ""
              }
              src={user.avatar}
              alt={user.name}
            />
            <span>
              {user.name.length > 15
                ? user.name.substring(0, 12) + "..."
                : user.name}
            </span>
          </div>
        ))}
      </div>
      <div className="divisor" />
      <section className="editingSection">
        {currentlyEditing ? (
          <div className="content">
            <div className="inputFields">
              <input
                value={nameText}
                onChange={(e) => setNameText(e.target.value)}
                type="text"
                placeholder="Nome do perfil"
                className="customInput"
                />
              <input
                value={imageText}
                onChange={(e) => setImageText(e.target.value)}
                type="url"
                placeholder="Imagem do perfil (opcional)"
                className="customInput"
              />
            </div>
            <div className="actions">
              <button onClick={handleBack} className="actionButton">
                Cancelar
              </button>
              <button onClick={handleDelete} className="actionButton">
                Deletar perfil
              </button>
              <button onClick={handleSave} className="actionButton">
                Salvar
              </button>
            </div>
          </div>
        ) : (
          <h3>Selecione um perfil para editar</h3>
        )}
      </section>
    </div>
  );
};
