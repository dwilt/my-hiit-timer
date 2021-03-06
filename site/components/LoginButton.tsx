import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log({ isAuthenticated, user,  })

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;