import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

//eslint-disable-next-line
export default ({ isBlack }) => {
  const { userAvatar } = useContext(UserContext);
  console.log(userAvatar);

  return (
    <header className={isBlack ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={userAvatar} alt="Usuário" />
        </a>
      </div>
    </header>
  );
};
