import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { auth } from './services/firebase';
import App from './App';
import LoginScreen from './LoginScreen';

function AppWrapper() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const authorizedEmails = [
    "catherine.garcia@8thgradetracker.com",
    "mario.rodriguez@8thgradetracker.com",
    "laura.perez@8thgradetracker.com",
    "javier.sanchez@8thgradetracker.com"
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const userEmail = currentUser.email.toLowerCase().trim();
        if (authorizedEmails.includes(userEmail)) {
          setUser(currentUser);
        } else {
          setMessage('Acceso denegado. Tu correo electrónico no está autorizado.');
          auth.signOut();
        }
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      const userEmail = result.user.email.toLowerCase().trim();

      if (authorizedEmails.includes(userEmail)) {
        setUser(result.user);
      } else {
        setMessage('Acceso denegado. Tu correo electrónico no está autorizado para usar esta aplicación.');
        auth.signOut();
      }
    } catch (error) {
      setMessage(`Error durante el inicio de sesión: ${error.message}`);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      setMessage(`Error durante el cierre de sesión: ${error.message}`);
    }
  };

  return (
    <React.Fragment>
      {user ? (
        <App user={user} onSignOut={handleSignOut} />
      ) : (
        <LoginScreen onSignIn={handleSignIn} />
      )}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);
