import { useEffect, useState } from "react"; 
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/compat/auth"; 
import { auth } from "../firebase-config";

// import React, { useState, useEffect } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import OrderHistory from "./OrderHistory";


function LoginPage() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail,
                registerPassword
                );
            console.log(user)
          } catch (error) {
            console.log(error.message);
          }
};
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail,
                loginPassword
                );
            console.log(user)
          } catch (error) {
            console.log(error.message);
          }


};

    const logout = async () => {
    

        await signOut(auth);
};



    return (
        <div className="Login">
            <div>
                <h3> Register User </h3>

                <input 
                    placeholder="Email..." 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} 
                />
                <input 
                    placeholder="Password..." 
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }} 
                />

                <button onClick={register}> Create User </button>
            </div>
            <div>
                <h3> Login </h3>
                
                <input placeholder="Email..." 
                      onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }} 
                />
                <input placeholder="Password..." 
                      onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }} 
                />

                <button onClick={login}> Login </button>
            </div>

            <h4> User Logged In: </h4>
            {user ? user.email : "Not Logged In"}

            <button onClick={logout}> Sign Out </button>

        </div>
    );
}

export default LoginPage;

// function Login() {
//     const [user, setUser] = useState(null);
  
//     useEffect(() => {
//       // Set the currently logged-in user in your app's state
//       firebase.auth().onAuthStateChanged((user) => {
//         setUser(user);
//       });
//     }, []);
  
//     return (
//       <div>
//         {user ? (
//           <OrderHistory />
//         ) : (
//           <button onClick={() => firebase.auth().signInWithPopup(provider)}>
//             Sign in with Google
//           </button>
//         )}
//       </div>
//     );
//   }
  
//   export default Login;