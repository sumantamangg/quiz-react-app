import react from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchQuiz } from './QuizSlice';




export default function Quiz() {
    const dispatch = useDispatch()
    const { quiz, loading, error } = useSelector(state => state.quiz)
  
    useEffect(() => {
      dispatch(fetchQuiz())
    }, [dispatch])
  
    function handleSubmit(){

    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'> Question goes here</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
            {/* <Form.Label as="legend" column sm={2}>
                Select your Answers
            </Form.Label> */}
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
                <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                    <Button type="button" >
                        Previous
                    </Button>
                    <Button disabled={false} type="button" style={{marginLeft: "30%"}}>
                        Next
                    </Button>
                    
                </Col>
            </Form.Group>
            <Form.Group>
                <Col sm={10}>
                <Button disabled={false} type="submit" >
                        Submit
                    </Button>
                </Col>
            </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    <ul>
          {quiz.map(item => (
            <li key={item.id}>{item.correctAnswer}</li>
          ))}
    </ul>
</>
  )
}
