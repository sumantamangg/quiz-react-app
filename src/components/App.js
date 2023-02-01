import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import Signup from "./Signup"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import HomeNavBar from "./HomeNavBar"

function App() {
    return (
        <AuthProvider>
            <Container 
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh"}}
            >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route exact path="/" element={<PrivateRoute/>}> </Route>
                            <Route path="/signup" element={<Signup/>}> </Route>
                            <Route path="/login" element={<Login/>}> </Route>
                        </Routes>  
                    </AuthProvider>
                </Router>
            </div>
            </Container>
        </AuthProvider>
    )
}

export default App