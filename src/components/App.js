import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import Signup from "./Signup"
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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
                            <Route path="/" element={<Home/>} exact> </Route>
                            <Route path="/signup" element={<Signup/>}> </Route>
                        </Routes>  
                    </AuthProvider>
                </Router>
            </div>
            </Container>
        </AuthProvider>
    )
}

export default App