import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogut: () => {}
});

export default AuthContext;