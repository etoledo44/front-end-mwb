import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Bshop from './pages/Bshop'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

toast.configure()

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/bshop'>
        <Bshop/>
      </Route>
      <Route path='/detail/:barbershop'>
        <Detail />
      </Route>
    </Router>
  );
}

export default App;
