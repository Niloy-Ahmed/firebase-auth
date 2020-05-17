import React from 'react'
import Google from './FireBaseAuthentication/Google'
// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './FireBaseConfiq';

// firebase.initializeApp(firebaseConfig);

function App() {
  return(
    <div className="App-header">
      <Google/>
      {/* <Own/> */}
    </div>
  )
}
// const [user, setUser] = useState({
//   isSignedIn: false,
//   name : '',
//   email:'',
//   photo:''
// })

// //pop pop ante ai command lekte hoy.
//   var provider = new firebase.auth.GoogleAuthProvider();
//   const handleSignIn = () => {
//     firebase.auth().signInWithPopup(provider)
//     .then(res => {
//       const {displayName, email, photoURL} = res.user;
//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL
//       }
//       setUser(signedInUser);
//       console.log(displayName, email, photoURL);
//     })
//     .catch(err =>{
//       console.log(err);
//       console.log(err.massage);
//     })
//   }

//   const handleSignOut = () => {
//     firebase.auth().signOut().
//     then(res=>{
//       const signOutUser = {
//         isSignIn : false,
//         name:'',
//         photo:'',
//         email:'',
//         password:'',
//         err :'',
//         isValid:false,
//         existingUser : false,
//       }
//       setUser(signOutUser)
//     })
//     .catch(err => {

//     })
//     // console.log()
//   }
// const is_valid_email =email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
// const hasNumber = input => /\d/.test(input);
// const switchForm = event =>{
//   const createUser = {...user};
//       createUser.existingUser = event.target.checked;
//       setUser(createUser);
// }
// const handleChange = e =>{
//   const newUserInfo = {
//     ...user
//   };

//   // perform validation
//   let isValid = true;
//   if(e.target.name === 'email'){
//     isValid = is_valid_email(e.target.value);
//   }
// if(e.target.name ==="password"){
//   isValid =e.target.value.length > 8 && hasNumber(e.target.value);
// }

//   newUserInfo[e.target.name] = e.target.value;
//   newUserInfo.isValid = isValid
//   setUser(newUserInfo)
//   console.log(e.target.value)
// }

// const createAccount = (event)=>{
  
//   if(user.isValid){
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res =>{
//       console.log(res);
//       const createUser = {...user};
//       createUser.isSignedIn = true;
//       createUser.error ='';
//       setUser(createUser);
//     })
//     // console.value(user.name, user.password)
//       .catch(err =>{
//         console.log(err.massage);
//         const createUser = {...user};
//       createUser.isSignedIn = false;
//       createUser.error = err.massage
//       setUser(createUser);

       
//       })
//   }
// else {
//   console.log('from is not valid',user);
//  }
//  const createAccount = (event)=>{
  
//   if(user.isValid){
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res =>{
//       console.log(res);
//       const createUser = {...user};
//       createUser.isSignedIn = true;
//       createUser.error ='';
//       setUser(createUser);
//     })
//     // console.value(user.name, user.password)
//       .catch(err =>{
//         console.log(err.massage);
//         const createUser = {...user};
//       createUser.isSignedIn = false;
//       createUser.error = err.massage
//       setUser(createUser);

       
//       })
//   }
//    event.preventDefault();
//    event.target.reset();
// }
//  const signedInUser = event => {
//    event.preventDefault();
//    event.target.reset();
 //}
  // return (
  //   <div className="App">
  //    {
    //     user.isSignedIn ?  <button onClick={handleSignIn}>Sign Out</button> :
    //     <button onClick={handleSignIn}>Sign in</button>
    //   }
    //   {
    //     user.isSignedIn && <div>
    //        <p>welcome, {user.name}</p>
    //   <p>Your email: {user.email}</p>
    //   <img src={user.photo} alt=""/>
    //     </div>
    //   }
    //   <h1>Our Own Authentication</h1>
    //   <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
    //   <label htmlFor="switchForm"> returning user </label>
    //   <form style={{display:user.existingUser ? 'block': 'none'}} onSubmit={signedInUser}>
    //   <input type="text" onFocus={handleChange} name="email"  placeholder="Your email" required/> <br/>
    //   <input type="password" onFocus={handleChange} name="password" placeholder="Your password" required/> <br/>
    //   <input type="submit" value="Sign In"/>
    //   </form>
    //   <form style={{display:user.existingUser ? 'none': 'block'}} onSubmit={createAccount}>
    //   <input type="text" onFocus={handleChange} name="name"  placeholder="Your Name" required/> <br/>
    //   <input type="text" onFocus={handleChange} name="email"  placeholder="Your email" required/> <br/>
    //   <input type="password" onFocus={handleChange} name="password" placeholder="Your password" required/> <br/>
    //   <input type="submit" value="Create Account"/>
    //   </form>
    //   {
    //     user.error && <p style={{color:'red'}}>{user.err}</p>
    //   }
//     </div>
//   );
// }

export default App;
