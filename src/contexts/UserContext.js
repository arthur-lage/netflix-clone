import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

//eslint-disable-next-line
export default ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    name: "User 1",
    id: 1,
  });

  const [users, setUsers] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const resetUsers = () => {
    setUsers([
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
        name: "User 1",
        id: 1,
      },
      {
        avatar:
          "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg",
        name: "User 2",
        id: 2,
      },
      {
        avatar:
          "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",
        name: "User 3",
        id: 3,
      },
      {
        avatar:
          "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",
        name: "User 4",
        id: 4,
      },
    ]);
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("netflix-clone:users")) === null ||
      JSON.parse(localStorage.getItem("netflix-clone:users")).lenght === 0 ||
      JSON.parse(localStorage.getItem("netflix-clone:users")) === undefined
    ) {
      resetUsers();
    } else {
      setUsers(JSON.parse(localStorage.getItem("netflix-clone:users")));
    }

    if (
      JSON.parse(localStorage.getItem("netflix-clone:currentUser")) === null ||
      JSON.parse(localStorage.getItem("netflix-clone:currentUser")) === {}
    ) {
      setCurrentUser({
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
        name: "User 1",
        id: 1,
      });
    } else {
      setCurrentUser(
        JSON.parse(localStorage.getItem("netflix-clone:currentUser"))
      );
    }

    if (
      JSON.parse(localStorage.getItem("netflix-clone:accounts")) == null ||
      JSON.parse(localStorage.getItem("netflix-clone:accounts")).lenght === 0 ||
      JSON.parse(localStorage.getItem("netflix-clone:accounts")) === undefined
    ) {
      setAccounts([]);
    } else {
      setAccounts(JSON.parse(localStorage.getItem("netflix-clone:accounts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "netflix-clone:currentUser",
      JSON.stringify(currentUser)
    );
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("netflix-clone:users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("netflix-clone:accounts", JSON.stringify(accounts));
  }, [accounts]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        resetUsers,
        accounts,
        setAccounts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
