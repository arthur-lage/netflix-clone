import React, { useContext } from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

import { UserContext } from '../../contexts/UserContext'

//eslint-disable-next-line
export default () => {
  const history = useHistory();

  const { currentUser, setCurrentUser, users, setUsers } = useContext(UserContext)

  const handleProfileClick = (id) => {
    let newUser = users.filter(user => user.id === id)[0]
    setCurrentUser(newUser)
    history.push("/")
  };

  const handleAddProfile = () => {
    if (users.length === 5) {
      alert("Número máximo de usuários atingido.");
    } else {
        let id = users.length + 1
        setUsers([...users, {
            id,
            avatar: "https://noirflix.netlify.app/imgs/icon3.png",
            name: `User ${id}`
        }])
    }
  };

  const teste = () => {
    localStorage.setItem("netflix-clone:users", JSON.stringify(users))
    localStorage.setItem("netflix-clone:currentUser", JSON.stringify(currentUser))
  }

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
            <span>{user.name}</span>
          </div>
        ))}
        <div onClick={handleAddProfile} className="addProfile">
          <i className="fas fa-plus-circle"></i>
          <p>Add Profile</p>
        </div>
      </div>

      <a onClick={teste} className="manageProfiles" href="/profiles">
        MANAGE PROFILES
      </a>
    </div>
  );
};
