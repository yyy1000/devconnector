import { React, Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
// Redux
import { Provider } from 'react';
import store from './store';

const App = () =>(
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Fragment>
  </Router>
  </Provider>
);


export default App;
