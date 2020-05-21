import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Bshop from './pages/Bshop'
import NotFound from './pages/NotFound'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import {AuthProvider} from './contexts/auth'

toast.configure()

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
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
          <Route path='*'>
            <NotFound  />
          </Route>
        </Switch>

      </AuthProvider>
    </Router>
  );
}

export default App;
