import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function HomeNavBar() {
  const {logout} = useAuth()
  const [error, setError] = useState()
  const navigate = useNavigate()
  async function handleLogout(){
    try {
      await logout()
      navigate('/login')
    } catch {
      setError('unable to login')
      console.log("error in logging out")
    }
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;