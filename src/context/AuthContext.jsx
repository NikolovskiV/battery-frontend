import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextP(props) {
  const [loggedIn, setLoggedIn] = useState();

  async function getLoggedIn() {
    const loggedInRes = await axios.get(
      'https://battery-api.onrender.com/auth/loggedIn'
    );
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextP };
