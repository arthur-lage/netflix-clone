import React, { createContext, useState } from "react";
export const UserContext = createContext();

//eslint-disable-next-line
export default ({ children }) => {
  const [userAvatar, setUserAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
  );

  return (
    <UserContext.Provider value={{ userAvatar, setUserAvatar }}>
      {children}
    </UserContext.Provider>
  );
};
