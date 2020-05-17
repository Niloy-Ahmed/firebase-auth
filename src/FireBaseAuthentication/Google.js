import React, { useState } from 'react';
import './Googel.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';


firebase.initializeApp(firebaseConfig)



const Google = () => {

    //google sign in method
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error:'',
        isValid: false,
        existingUser:false,
    })

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                console.log(displayName, photoURL, email);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signOutUser)
                console.log(res);

            })
            .catch(err => {

            })
        console.log('signOut clicked');

    }
    const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const hasNumber = input => /\d/.test(input);
    const switchFrom = event =>{
        const createUser = {...user};
        createUser.existingUser = event.target.checked;
        setUser(createUser);

        
    }

    const signInUser = event =>{
        if (user.isValid) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .than(err =>{
                console.log(err);
                const createUser = {...user};
                createUser.isSignIn = true;
                setUser(createUser);
            })
            .catch(err =>{
                console.log(err);
                const createUser = {...user};
                createUser.isSignIn = false;
                createUser.error = '';
                setUser(createUser);
                
            })
        }
        event.preventDefault();
        event.target.reset();
    }
    //Our Own Authentication user
    const handleChange = e => {
        const newUserInfo = {
            ...user
        };
        let isValid = true
        if (e.target.name === 'email') {
            isValid = is_valid_email(e.target.value);
        }
        if (e.target.name === "password") {
            isValid = e.target.value.length > 8 && hasNumber(e.target.value)
        }

        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        setUser(newUserInfo)

    }
    const createAccount = e => {
        if (user.isValid) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .than(err =>{
                console.log(err);
                const createUser = {...user};
                createUser.isSignIn = true;
                setUser(createUser);
            })
            .catch(err =>{
                console.log(err);
                const createUser = {...user};
                createUser.isSignIn = false;
                createUser.error = '';
                setUser(createUser);
                
            })
        }
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            {
                user.isSignIn ? <button className="google-button" onClick={handleSignOut} >SIGN OUT</button> :
                    <button className="google-button" onClick={handleSignIn} >SIGN IN</button>
            }
            {
                user.isSignIn &&
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <img src={user.photo} alt="" />

                </div>
            }

            {/* our own authentication user */}
            <div>
                <h1>Our own authentication</h1>
                <label htmlFor="switchFrom">
                <input type="checkbox" name="switchForm" onChange={switchFrom} id="switchFrom"/>
                     Returning user
                   
                </label>
                <form style={{display:user.existingUser ? 'block' : 'none'}} onSubmit={signInUser}>
                    <input type="text" name="email" id="email" placeholder="Enter your Email" onBlur={handleChange} required />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Enter your password" onBlur={handleChange} required />
                    <br />
                    <input type="submit" value="signIn" />
                </form>
                <form style={{display:user.existingUser ? 'none' : 'block'}} onSubmit={createAccount}>
                    <input type="text" name="name" id="name" placeholder="Enter your Name" onBlur={handleChange} required />
                    <br />
                    <input type="text" name="email" id="email" placeholder="Enter your Email" onBlur={handleChange} required />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Enter your password" onBlur={handleChange} required />
                    <br />
                    <input type="submit" value="Create Account" />
                </form>
                {
                    user.error && <p>{user.error}</p>
                }
            </div>

        </div>
    );
};

export default Google;