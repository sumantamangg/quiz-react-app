import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Home from './Home'
import Login from './Login'

export default function PrivateRoute() {

    const { currentUser } = useAuth() 
    if (currentUser){

    }
    return currentUser ? <Home /> : <Login />
}
