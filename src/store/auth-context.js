import React from "react";

//creates a context object
//need to provide and consume/listen a context
//providing means you wrap in JSX all the components that should be able to listen to that context
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
