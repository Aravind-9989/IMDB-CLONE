import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../../firebase/firebase';

// Define the background image URL
const backgroundImageUrl = "https://plus.unsplash.com/premium_photo-1669223469766-130f869846e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mavb = useNavigate();
  const Auth = getAuth(app);

  const handleSignup = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    createUserWithEmailAndPassword(Auth, email, password).then(() => {
      console.log("success");
      mavb('/');
    });
  };

  const log = () => {
    // You can handle login functionality here
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImageUrl})`, 
      backgroundSize: 'cover', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0' 
    }}>
      <div style={{ 
        backgroundColor: '#fff', 
        borderRadius: '8px', 
        padding: '20px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        width: '400px', 
        height: 'auto', 
        textAlign: 'center',
        transition: 'transform 0.3s ease', // Animation for card transitions
        transform: 'translateY(0)', // Initial translation
      }}>
        <h2 style={{ marginBottom: '20px', color: "black", fontSize: '24px' }}>Signup</h2>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label htmlFor="username" style={{ fontWeight: 'bold', marginBottom: '5px', color: "black" }}>Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px', color: "black" }}>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label htmlFor="password" style={{ fontWeight: 'bold', marginBottom: '5px', color: "black" }}>Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s ease', border: 'none' }}>Signup</button>
          </div>
        </form>
        <button onClick={log} style={{ backgroundColor: 'transparent', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>Login</button>
      </div>
    </div>
  );
};

export default SignupPage;
