import { createContext, useEffect, useState } from "react";
import { auth } from "../hooks/FirebaseAuth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const userContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState("sarajit");
  const [allCraft, setAllCraft] = useState();
  const [togle, setTogle] = useState(true);

  //    get data from database
  const togleCoffee = () => {
    setTogle(!togle);
  };
  useEffect(() => {
    fetch("http://localhost:5001/allCraft")
      .then((res) => res.json())
      .then((data) => setAllCraft(data));
  }, [togle]);
  //    getdata from database

  // firebase
  // firebase
  // sign Up user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password, logInUser);
  };

  // login user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // is have user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => {
      unsubcribe();
    };
  }, []);
  // firebase
  // firebase

  const info = { user, allCraft, togleCoffee, createUser, logInUser };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
}

export default AuthProvider;
