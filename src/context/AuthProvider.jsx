import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init.js";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create account for new user
  const signUpNewUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  sign up and sign in with google account
  const signUpOrSignInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  // sign in existing user
  const signInExistsUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const data = {
    user,
    loader,
    signUpNewUser,
    signUpOrSignInWithGoogle,
    signInExistsUser,
    logOutUser,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
