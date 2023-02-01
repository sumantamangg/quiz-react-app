import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import HomeNavBar from './HomeNavBar'

export default function Home() {
    const [error, setError] = useState()
    const [currentUser, setCurrentUser] = useState()
    const navigate = useNavigate()
    const { logout } = useAuth()

    async function handleLogout(){
        setError('')
        try{
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <HomeNavBar></HomeNavBar>
    )
}
