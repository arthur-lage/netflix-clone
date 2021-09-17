import React, { useContext } from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

import { UserContext } from '../../contexts/UserContext'

//eslint-disable-next-line
export default () => {
  const history = useHistory();

  const { setCurrentUser, users, resetUsers } = useContext(UserContext)

  const resetProfiles = () => {
    resetUsers()
  }

  const handleProfileClick = (id) => {
    let newUser = users.filter(user => user.id === id)[0]
    setCurrentUser(newUser)
    history.push("/")
  };

  const handleAddProfile = () => {
    if (users.length === 5) {
      alert("Número máximo de usuários atingido.");
    } else {
      history.push("/profile/create")
    }
  };

  return (
    <div className="changeProfile">
      <h2>Quem está assistindo?</h2>

      <div className="profiles">
        {users.map((user, key) => (
          <div
            onClick={() => handleProfileClick(user.id)}
            key={key}
            className="profile"
          >
            <img src={user.avatar} alt={user.name} />
            <span>{user.name.length > 15 ? user.name.substring(0, 12) + '...' : user.name}</span>
          </div>
        ))}
        <div onClick={handleAddProfile} className="addProfile">
          <i className="fas fa-plus-circle"></i>
          <p>Adicionar perfil</p>
        </div>
      </div>

      <a className="manageProfiles" href="/profile/edit">
          Editar perfís
      </a>

      <button className="resetProfiles" onClick={resetProfiles}>Resetar perfís</button>
    </div>
  );
};
