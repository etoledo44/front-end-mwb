import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import {AppRoutes} from './routes/app.routes'

toast.configure()

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
