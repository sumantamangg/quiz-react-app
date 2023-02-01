import React, { useRef, useState, useEffect } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const  {login}  = useAuth()
    const navigate = useNavigate()
    const {currentUser} = useAuth()

    useEffect(()=> {
        if (currentUser) {
            navigate('/')
        }
    }, [])
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to login to the account')
        }
        setLoading(false)
        setMessage('Successfully logged in');
        navigate("/")

    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'> Login</h2>
                {error && <Alert variant="danger"> {error}</Alert>}
                {message && <Alert variant="success"> {message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Need an Account? <Link to="/signup">Sign Up </Link>
        </div>
    </>
  )
}
