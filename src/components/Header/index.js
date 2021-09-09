import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

import { Link } from 'react-router-dom'

//eslint-disable-next-line
export default ({ isBlack }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <header className={isBlack ? "black" : ""}>
      <div className="header--logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </Link>
      </div>
      <div className="header--user">
        <Link to="/profile">
          <img src={currentUser.avatar} alt="Usuário" />
        </Link>
      </div>
    </header>
  );
};
