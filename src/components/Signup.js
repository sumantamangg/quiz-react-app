import React, { useRef, useState, useEffect } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const  {signup}  = useAuth()
    const {currentUser} = useAuth()
    const navigate = useNavigate()

    useEffect(()=> {
        if (currentUser) {
            navigate('/')
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()


        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("your passwords do not match.")
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
        setMessage('Account successfully created.');
        emailRef.current.value = ''
        passwordRef.current.value = ''
        passwordConfirmRef.current.value = ''
        //route to home page after logged in.
        
        navigate("/home")
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'> Sign Up</h2>
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
                    <Form.Group id = "password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100">
                        Sign up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an Account? <Link to="/login">Log In </Link>
        </div>
    </>
  )
}
