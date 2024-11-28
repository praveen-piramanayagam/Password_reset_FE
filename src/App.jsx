import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Forgot_password from './pages/Forgot_password';
import PasswordReset from './pages/Password_reset';

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<Forgot_password/>} />
          <Route path='/reset-password' element={<PasswordReset/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;