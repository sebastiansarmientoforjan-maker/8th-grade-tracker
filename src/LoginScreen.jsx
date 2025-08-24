import React from 'react';

export default function LoginScreen({ onSignIn }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4">8th Grade Tracker</h1>
        <p className="text-lg text-gray-700 mb-6">Inicia sesión para acceder a la aplicación.</p>
        <button
          onClick={onSignIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
}
