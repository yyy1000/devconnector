import { Fragment } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
const App = () =>(
  <Fragment>
    <Navbar></Navbar>
    <Landing></Landing>
  </Fragment>
);


export default App;
