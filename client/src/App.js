import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Navigation from './components/Navigation';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/login" element={Login} />
          <Route exact path="/signup" element={SignUp} />
          <Route exact path="/reset-password" element={ResetPassword} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
