import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, useLoader] = useState(true);

  const signUpNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const data = {
    user,
    loader,
    signUpNewUser,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
