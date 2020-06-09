import React from 'react'
import {AuthProvider} from '../contexts/auth'
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'


import {Pages} from './pages'

export const AppRoutes = () => {
    return(
        <Router >
            <AuthProvider>
                <Switch >
                    <Route exact path='/' >
                        <Pages.Home/>
                    </Route>
                    <Route path='/login'>
                        <Pages.Login />
                    </Route>
                    <Route path='/user/barbershop'>
                        <Pages.Barbershop/>
                    </Route>
                    <Route path='user/barbershop/:bname/:bid'>
                        <Pages.BarbershopDetail />
                    </Route>
                    <Route path='*'>
                        <Pages.NotFound  />
                    </Route>
                </Switch>
            </AuthProvider>
        </Router>
    )
}